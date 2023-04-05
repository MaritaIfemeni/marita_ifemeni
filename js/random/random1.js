

function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x = 0; x < 5; x++) {
  console.log(test[x]);
}

for (let y = 0; y < 5; y++) {
  if (test[y] > 5) {
  }
  console.log("tässä" + test[y] * 2);
}



let even = [];
for (let z = 0; z < 5; z++) {
    if (test[z] % 2 === 0) {
        even.push(test[z]);
    }
    }
console.log(even);

function lindedIn(str, str2) {
  const firstName = "Marita";
  const lastName = "Ifemeni";
  const fullName = `${firstName} ${lastName}`;
  let motto = "Let's make beautiful code together";
  return `${str} ${fullName} ${str2} ${motto}`;
}
console.log(lindedIn("Hello, my name is", "and my motto is:"));