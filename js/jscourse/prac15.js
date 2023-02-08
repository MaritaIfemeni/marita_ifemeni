// create function that divides given number by 2
function puolitus(num) {
  return num / 2;
}
// create function that returns square of given number
function nelio(num) {
  return num * num;
}

// create function called toisto that takes 3 parameters, first is number which tells how many times the given function
// should be called, second is the number that is given to the function and third is the function that is called

function toisto(kerrat, num, funktio) {
    if (kerrat < 1) {
        console.log("Toistoja tulee olla ainakin yksi!");
        return;
      }
  else { (kerrat > 0) 
    for (var i = 0; i < kerrat; i++) {
      num = funktio(num);
    }
    return num;
  }

}

console.log(puolitus(50));
console.log(toisto(5, 200, puolitus));
console.log(toisto(3, 5, nelio));
console.log(toisto(-1, 99, puolitus));
