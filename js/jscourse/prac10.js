var tiedot = ["Minttu", 1983];
tiedot[2] = "Ville";
tiedot.push("Saara");
tiedot.unshift("Jussi");
tiedot[2] = "liisa";

console.log(tiedot[3]);
console.log(tiedot.length);
console.log(tiedot);

var lista = ["a", "b", "c"];
console.log(lista.length);
lista[9] = "j";
console.log(lista.length);
console.log(lista);

var lista = ["a", "h", "b", "h", "c", "d", "e", "f", "g", "a", "b", "c"];
console.log(lista.indexOf("c")); 
console.log(lista.indexOf("h")); 
console.log(lista.indexOf("z")); 

var arvoja = [1, 2, 3, 0, 5, false, true];
console.log(arvoja.indexOf(false)); 

var lista = [1, 2, 3, 4];
var taulukko = ['a', 'b', 'c'];
var uusi = lista.concat(taulukko);
console.log(uusi);

var nimet = ['Eemeli', 'Celcius', 'Aarne', 'Daavid','Bertta',  'Frans'];
nimet.sort();   
console.log(nimet);
var numerot = [6, 3, 1, 7, 10, 21];
numerot.sort();  
console.log(numerot);