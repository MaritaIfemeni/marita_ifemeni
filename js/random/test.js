
let input = [1, -4, 12, 0, -3, 29, -150]

function biggerThanZero(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }       
    }
    return result;
} 



function descendingOrder(n){
    if (n >= 0) {
    let arr = n.toString().split('');
    console.log(arr);
    let result = arr.sort((a, b) => b - a);
    console.log(result);
    return Number(result.join(''));
    } else {
        return console.log("Please enter a positive number");
    }
}

console.log(descendingOrder(-3));

function isIsogram(str){
    let arr = str.toLowerCase().split('');
    let result = arr.filter((item, index) => arr.indexOf(item) === index);
    return result.length === arr.length;
}


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("liiza"));


  function squareDigits(num){
    let arr = num.toString().split('');
    for (let i = 0; i < arr.length; i++) 
    arr[i] = Math.pow(arr[i], 2) ;
    console.log("mitä tässä" + arr);
    return Number(arr.join(''));
  }

    console.log(squareDigits(91));
    console.log(squareDigits(777))
    
    
    function sumTwoSmallestNumbers(numbers) {  
      let numberArr = numbers.sort((a, b) => a - b);
      return numberArr[0] + numberArr[1]
    }   

    console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));


var number = function(busStops){
  let result = 0;
  for (let i = 0; i < busStops.length; i++) {
    result += busStops[i][0] - busStops[i][1];
  }
  return result;
}

console.log(number([[10,0],[3,5],[5,8]]));