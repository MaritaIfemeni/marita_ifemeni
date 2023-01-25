var luku = 0; 
while (luku <= 12) {
  console.log(luku); 
  luku = luku + 2; 
}

var tulos = 1;
var laskuri = 0;
while (laskuri < 10) {
  tulos = tulos * 2;
  laskuri = laskuri + 1;
}
console.log(tulos);

var tulos1 = 1;
for (var laskuri1 = 0; laskuri1 < 10; laskuri1 = laskuri1 + 1) //(20)
{
  tulos1 = tulos1 * 2;
}
console.log(tulos1);


console.log("Syötetty ikä: " + ika)
if (ika >= 18) {
  console.log("Käyttäjä on täysi-ikäinen.");
} else if (ika < 18 && ika > 0){
  console.log("Käyttäjä ei ole vielä täysi-ikäinen.");
} else {
  console.log("Virheellinen syöte!");
}


var Nimesi;
do {
  Nimesi = prompt("Syötä nimesi"); 
} while (!Nimesi); 
console.log(Nimesi);