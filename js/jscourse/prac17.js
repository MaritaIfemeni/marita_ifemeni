var array1 = ["Tämän", "taulukon", "alkiot", "muodostavat", "lauseen"];
var array2 = [3, 5, 7, 8, 9, 11, 13, 15, 16, 17, 19, 20];
var array3 = [5, "kertaa", 3, "on", 15];

function checkFunc(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && typeof arr[i++] === "string") {
      arr.join(" ");
      return combineFunc(arr);
    } else if (typeof arr[i] === "string") {
      arr.join(" ");
      console.log("Taulukossa tekstiä. Yhdistetään sanat:");
      return combineFunc(arr);
    } else {
      console.log("Taulukossa numeroita:");
      return sumFunc(arr);
    }
  }
}
function combineFunc(arr) {
  var combined = "";
  for (var i = 0; i < arr.length; i++) {
    combined += arr[i] + " ";
  }
  return combined;
}

function sumFunc(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function someFunction(arr, f1, f2, f3) {
  if (!f1(arr)) {
    console.log(f2(arr));
  } else {
    console.log(f3(arr));
  }
}

console.log(someFunction(array1, checkFunc, combineFunc, sumFunc));
console.log(someFunction(array2, checkFunc, combineFunc, sumFunc));
console.log(someFunction(array3, checkFunc, combineFunc, sumFunc));
