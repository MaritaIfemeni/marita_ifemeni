//var lause = "ntaeow2iöt0na12123 221kbiee2ug12i 2121 jp890ji12";
var lause = "nifs3fhd ghsdf gh132";
//var lause3 = "12908290 230293203 320320"

function tulostaNumerot() {
  var numerot = [];
  for (var i = 0; i < lause.length; i++) {
    if (lause[i].match(/[0-9]/)) {
      numerot.push(lause[i]);
      var lista = numerot.join(",");
    } 
    else if (lause[i].match(/[a-z]/)) {
      //console.log("ei numeroita");
    }
  }
  if (numerot.length === 0) {
    console.log("Ei numeroita");
  } else {
    console.log(lista);
  }
}
tulostaNumerot();
