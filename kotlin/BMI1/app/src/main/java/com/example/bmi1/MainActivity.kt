package com.example.bmi1

import android.content.Intent
import android.content.SharedPreferences
import android.content.SharedPreferences.Editor
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.preference.PreferenceManager.getDefaultSharedPreferences
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import java.math.RoundingMode
import java.text.DecimalFormat
import kotlin.math.pow

class MainActivity : AppCompatActivity() {
    var counter  = 0
    private var pituus1 = 0.0F

    private fun setList(list: ArrayList<String>, sharedPrefs: SharedPreferences){
        val sp: SharedPreferences = sharedPrefs
        val editor: Editor = sp.edit()
        val gson = Gson()
        val json = gson.toJson(list)
        editor.putString("bmilist", json)
        editor.apply()
    }

    private fun getList(sharedPrefs: SharedPreferences):ArrayList<String>{
        val sp: SharedPreferences = sharedPrefs
        val gson = Gson()
        val json = sp.getString("bmilist", null)
        val type = object :TypeToken<ArrayList<String>>(){}.type
        return gson.fromJson(json, type)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(findViewById(R.id.toolbar))

        val height = findViewById<EditText>(R.id.pituus)
        val weight = findViewById<EditText>(R.id.paino)

        val sharedPref = getDefaultSharedPreferences(this)
        if (sharedPref != null) {
            pituus1 = sharedPref.getFloat("Pituus", 0.0F)
        }
        if (sharedPref.getBoolean("check_box_preference_1", false)) {
            height.setText("$pituus1")
            }
        else {
            height.setText("")
        }

        findViewById<Button>(R.id.button2).setOnClickListener(View.OnClickListener { view ->
            val intent = Intent(view.context, history::class.java)
            view.context.startActivity(intent)
        })

        findViewById<Button>(R.id.Button).setOnClickListener {
            val h = (height.text).toString().toFloat()
            val w = weight.text.toString().toFloat()
           // val res = w / (h * h)
            //findViewById<TextView>(R.id.tulos).text = "%.2f".format(res)

            with(sharedPref.edit()) {
                putFloat("Pituus", h)
                apply()
            }

            if (w != null && h != null) {
                val sp: SharedPreferences = sharedPref
                val editor: Editor = sp.edit()
                val df = DecimalFormat("#.##")
                df.roundingMode = RoundingMode.CEILING
                val result = df.format((w / (h?.pow(2)!!))).toString()
                findViewById<TextView>(R.id.tulos).text = ("YOUR BMI IS: $result")
                with(editor) {
                    if(sp.contains("bmilist")) {
                        val bmiList = getList(sharedPref)
                        bmiList.add(result)
                        setList(bmiList, sharedPref)
                    } else {
                        setList(arrayListOf(result), sharedPref)
                    }
                    putFloat("height", h)
                    apply()
                }
            }
            else {
                counter++
                findViewById<TextView>(R.id.tulos).text = ("Please enter a valid value for weight and height!\nFailures: $counter")
            }

        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        return when (item.itemId) {
            R.id.action_settings -> {
                val intent = Intent(this, SettingsActivity::class.java)

                startActivity(intent)
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }
}