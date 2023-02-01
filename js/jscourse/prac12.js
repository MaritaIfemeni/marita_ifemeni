var oona = {
  sukunimi: "Ohjelmoija",
  etunimi: "Oona",
  ika: 32, 
  nimi: function() {return this.etunimi + " " + this.sukunimi;}};

var kimmo = {   
  sukunimi: "Koodari",
  etunimi: "Kimmo",
  ika: 20, 
  nimi: function() {return this.etunimi + " " + this.sukunimi;}};

  console.log("Nimi: " + oona.nimi() + "\tIkä: " + oona.ika);
  console.log("Nimi: " + kimmo.nimi() + "\tIkä: " + kimmo.ika);
  console.log(oona.etunimi + " on " + (oona.ika - kimmo.ika) + " vuotta vanhempi kuin " + kimmo.etunimi + ".");
