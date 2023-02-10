var kauppa = {};
var Henkilö = function (etunimi, sukunimi) {    
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.nimi = function () {
        return this.sukunimi + " " + this.etunimi;
      };
    };

kauppa.asiakasrekisteri = (function () {
  var asiakkaat = [];
  var id = 0;
  function lisaa(etunimi, sukunimi) {
    var asiakas = new Henkilö(etunimi, sukunimi);
    asiakkaat[id] = asiakas;
    console.log("Lisätty asiakas ID:llä " + id);
    id++;
  }

  function asiakkaanTiedot(id) {
    if (typeof id === "undefined") {
        return "Anna asiakkaan ID!";
    } else if (asiakkaat[id]) {
        return console.log(id + ": " + asiakkaat[id].nimi());
    } else {
        return "Liian korkea ID!";
    }
}

  function asiakasLista() {
    var lista = [];
    for (var i in asiakkaat) {
      lista.push(i + ": " + asiakkaat[i].nimi());
    }
    lista = lista.join("\n");
    return console.log("Tulostetaan kaikki asiakkaat:\n" + lista);
  }

  // rajapinta
  return {
    lisaa: lisaa,
    asiakkaanTiedot: asiakkaanTiedot,
    asiakasLista: asiakasLista,
  };
})();

console.log(kauppa.asiakasrekisteri.asiakkaanTiedot(0));
console.log(kauppa.asiakasrekisteri.lisaa("Matti", "Meikäläinen"));
console.log(kauppa.asiakasrekisteri.lisaa("Hanna", "Huippukoodari"));
console.log(kauppa.asiakasrekisteri.asiakkaanTiedot(1));
console.log(kauppa.asiakasrekisteri.lisaa("Kerttu", "Leppä"));
console.log(kauppa.asiakasrekisteri.lisaa("Simo", "Hillo"));
console.log(kauppa.asiakasrekisteri.asiakasLista());
