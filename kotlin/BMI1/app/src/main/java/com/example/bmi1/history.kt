package com.example.bmi1
import android.content.SharedPreferences
import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.preference.PreferenceManager
import com.github.mikephil.charting.charts.BarChart
import com.github.mikephil.charting.data.BarData
import com.github.mikephil.charting.data.BarDataSet
import com.github.mikephil.charting.data.BarEntry
import com.github.mikephil.charting.utils.ColorTemplate
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

private fun getList(sharedPrefs: SharedPreferences):ArrayList<String> {
    val sp: SharedPreferences = sharedPrefs
    val gson = Gson()
    val json = sp.getString("bmilist", null)
    val type = object : TypeToken<ArrayList<String>>(){}.type

    return gson.fromJson(json, type)
}

private fun clearBmiList(sharedPrefs: SharedPreferences) {
    val sp: SharedPreferences = sharedPrefs
    val editor: SharedPreferences.Editor = sp.edit()
    editor.remove("bmilist")
    editor.apply()
}

private fun populateList(list: MutableList<Float>, size: Int):List<Float> {
    val req: Int = 6 - size
    for (i in 0..req){
        list.add(0f)
    }
    return list
}

class history : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.fragment_history)
        val sharedPref = PreferenceManager.getDefaultSharedPreferences(this)
        var bmiList: ArrayList<String>? = null
        var reverseList: List<Float>? = null

        if(sharedPref.getString("bmilist",null) != null) {
            bmiList = getList(sharedPref)

            reverseList = bmiList.map { it.toFloat() }.reversed()
            if (reverseList.size < 6) {
                reverseList = populateList(reverseList.toMutableList(), reverseList.size)
            }
        } else {
            reverseList = listOf(0f,0f,0f,0f,0f,0f)
        }

        drawGraph(reverseList)

        findViewById<Button>(R.id.clearHistoryButton).setOnClickListener(){
            clearBmiList(sharedPref)
            drawGraph(reverseList)
        }
    }

    private fun drawGraph(reverseList: List<Float>) {
        val barChart = findViewById<View>(R.id.barchart) as BarChart
        val entries: ArrayList<BarEntry> = ArrayList()
        entries.add(BarEntry(reverseList[0], 0))
        entries.add(BarEntry(reverseList[1], 1))
        entries.add(BarEntry(reverseList[2], 2))
        entries.add(BarEntry(reverseList[3], 3))
        entries.add(BarEntry(reverseList[4], 4))
        entries.add(BarEntry(reverseList[5], 5))

        val bardataset = BarDataSet(entries, "BMI")

        val labels = ArrayList<String>()
        labels.add("Latest")
        labels.add("")
        labels.add("")
        labels.add("")
        labels.add("")
        labels.add("Oldest")

        val data = BarData(labels, bardataset)
        barChart.data = data
        barChart.axisLeft.setAxisMinValue(0f)

        barChart.setDescription("History of 6 previous values")

        bardataset.setColors(ColorTemplate.VORDIPLOM_COLORS)
        barChart.animateY(5000)
    }
}