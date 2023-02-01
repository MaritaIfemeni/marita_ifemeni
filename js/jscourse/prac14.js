//Kirjoita funktio popAndShift(). Funktion tulee ensin tulostaa taulukoiden
//array1 ja array2 sisällöt. Tämän jälkeen, array2:sta poistetaan
//vuorotellen .pop()- ja .shift()-metodeja käyttäen alkioita, lisäten ne array1:n
//loppuun. Lopussa tulostetaan array1:n sisältö.

var array1 = ["A"];
var array2 = ["B", "C", "D", "E", "F", "G", "H", "I"];

// var array1 = [1, 2, 3];
// var array2 = [5, 6, 4];

function popAndShift() {
  console.log("Taulukko 1: " + array1);
  console.log("Taulukko 2: " + array2);
  while (array2.length > 0) {
    console.log(`Start of loop array2 length: ${array2.length}`);
    let itemBack = array2.pop();
    array1.push(itemBack);
    if (array2.length === 0) {
      break;
    }
    console.log(`After pop array2 length: ${array2.length}`);
    let itemFront = array2.shift();
    array1.push(itemFront);
    console.log(`After shift array2 length: ${array2.length}`);
    console.log(`itemBack: ${itemBack}, itemFront: ${itemFront}`);
  }

  console.log("Lopputulos: " + array1);
}
popAndShift();
