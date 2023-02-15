// create arrow function called someFunction

const someFunction = () => {
  console.log("Hi, I'm an arrow function!");
};
someFunction();

// create function sum that takes endless parameters and returns the sum of them

const sum = (...params) => {
    let sum = 0;
    params.forEach((param) => (sum += param));
    return sum;
    };

console.log(sum(1,4,3,8,11));

