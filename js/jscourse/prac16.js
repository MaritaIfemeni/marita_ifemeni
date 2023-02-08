
var value = 3;

var greaterThanZero = function (n) {
        return n > 0;
}

var reduceOne = function (n) {
    return n - 1;
}

var printValue = function (n) {
    console.log(n);
}

function loop(value, condition, update, body) {
    if (condition(value)) {
        body(value);
        loop(update(value), condition, update, body);
    }
}

console.log(loop(value, greaterThanZero, reduceOne, printValue));
