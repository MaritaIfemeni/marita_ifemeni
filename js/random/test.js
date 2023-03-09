
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
