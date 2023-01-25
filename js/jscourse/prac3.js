//prime number counter
var i = 0
var j = 0
var prime = 0
var primeCounter = 0
for (i = 1; i <= 60; i++) {
    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            prime++
        }
    }
    if (prime == 2) {
        console.log(i)
        primeCounter++
    }
    prime = 0
}
console.log("Alkulukuja löydetty yhteensä: " + primeCounter )