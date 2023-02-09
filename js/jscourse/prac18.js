function Henkilo(nimi, tyo, palkka) {
  this.nimi = nimi;
  this.tyo = tyo;
  this.palkka = palkka;
}

henk1 = new Henkilo("Mikko", "JS-koodari", 5000);
henk2 = new Henkilo("Lea", "Python-koodari", 1500);
henk3 = new Henkilo("Pena", "Opettaja", 1000);


// create function aclled vertaaPalkka which compares the salary of two objects
Henkilo.prototype.vertaaPalkka = function(henkilo) {
    if (this.palkka > henkilo.palkka) {
        console.log(this.nimi + " tienaa " + (this.palkka - henkilo.palkka) + " enemmän kuin " + henkilo.nimi);
    } else if (this.palkka < henkilo.palkka) {
        console.log(this.nimi + " tienaa " + (henkilo.palkka - this.palkka) + " vähemmän kuin " + henkilo.nimi);
    } else {
        console.log(this.nimi + " tienaa yhtä paljon kuin " + henkilo.nimi);
    }
}


//var henk1 = { nimi: "Mikko", tyo: "JS-koodari", palkka: 5000 };
//var henk2 = { nimi: "Lea", tyo: "Python-koodari", palkka: 1500 };
//var henk3 = { nimi: "Pena", tyo: "Opettaja", palkka: 1000 };



console.log("Ensimmäisen henkilön nimi: " + henk1.nimi);
console.log("Toisen henkilön työ: " + henk2.tyo);
console.log("Kolmannen henkilön palkka: " + henk3.palkka + "\n");
henk1.vertaaPalkka(henk2);
