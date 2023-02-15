class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  printLocation() {
    console.log(this.x + ", " + this.y);
  }
}

let shape = new Shape(0, 0);

shape.move(10, 10);
shape.printLocation();

class Person {
  constructor(first_name, last_name) {
    this.last_name = last_name;
    this.first_name = first_name;
  }

  printName() {
    console.log(first_name + " " + last_name);
  }
}

class Student extends Person {
  constructor(first_name, last_name, student_nr, departement) {
    super(first_name, last_name);
    this.student_nr = student_nr;
    this.departement = departement;
  }
}

let student = new Student("John", "Johnson", "S23324", "Computer Science");
console.log(
  student.first_name +
    " " +
    student.last_name +
    " " +
    student.student_nr +
    " " +
    student.departement
);

let first_name = "John";
let last_name = "Johnson";
console.log(`Hello ${first_name} ${last_name}`);

let x = 5;
let y = 8;
console.log(`Sum = ${x + y}`);

function hello() {
  return "Hello world";
}

console.log(`${hello()} John`)