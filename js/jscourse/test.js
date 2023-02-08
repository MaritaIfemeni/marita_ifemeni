var arr = new Array(1,2,3,4,5,6,7,8,9,10,166,777);
console.log(arr.length);
function greatestNumberInArray(arr) {
    let greatest = 0;
    for (let i = 0; i < arr.length; i++) {
      if (greatest < arr[i]) {
        greatest = arr[i];
      }
    }
    return greatest;
  }

  greatestNumberInArray(arr);

a=(new Array("test",1,2,3,-1,-2,-3,0xFFFFF)).sort()
console.log(a)
var favoriteFoods = ['Quiche', 'Carrots', 'Tuna'];
console.log(favoriteFoods.length);
favoriteFoods[3]= 'Pasta';
//favoriteFoods.push('Pizza');
console.log(favoriteFoods);

const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(arr1.sort());
console.log(arr2.sort());
console.log(arr1.sort() === arr2.sort());

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);

//toSource() -metodilla saadaan taulukon sisältö merkkijonona. 
//Tämä on hyödyllistä, jos halutaan tallentaa taulukon sisältö tiedostoon.

//sort() -metodi järjestää taulukon alkioita aakkosjärjestykseen.
// spilce() -metodi poistaa taulukosta alkioita ja palauttaa ne uudessa taulukossa.
//unshift() -metodi lisää alkion taulukon alkuun.

//Millä funktiolla lisätään ja poistetaan taulukon alkioita? 
//pop() ja push() -metodit lisäävät ja poistavat alkioita taulukon loppuun.
//last() ja first() -metodit palauttavat taulukon viimeisen ja ensimmäisen alkion.
//get() -metodi palauttaa taulukon alkion annetulla indeksillä.
//concat() -metodi yhdistää taulukot yhdeksi taulukoksi.

//create new object
var myObject = new Object();

const users = [
  {
    name: 'Ville',
    age: 25
  },
  {
    name: 'Kalle',
    age: 30
  },
  {
    name: 'Jussi',
    age: 1
  }
];

const newData = users.map( user => {
  return {
    ...user,
    onLapsi: user.age < 2 ? true: false
  }
});

console.log(newData);

function onAikuinen(user) {
  return user.age >= 18;
}

const aikuisetUsers = users.filter(onAikuinen);

console.log(aikuisetUsers);