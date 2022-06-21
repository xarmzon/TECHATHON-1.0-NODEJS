/** VARIABLES */
// The statement below creates (in other words: declares) a variable with the name “message”:
let message;

// Now, we can put some data into it by using the assignment operator =:
message = "Hello"; // store the string 'Hello' in the variable named message

//We can also declare multiple variables in one line:
let user = "John",
  age = 2,
  message1 = "Hello John";

//The multiline variant is a bit longer, but easier to read:
let user1 = "John";
let age1 = 25;
let message2 = "Hello";

// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = "03/03/2022";

// variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
const myBirthday1 = "18.04.1982";
myBirthday1 = "01.01.2001"; // error, can't reassign the constant!

/**** FUNCTIONS */
// To create a function we can use a function declaration.
function showMessage() {
  console.log("Hello everyone!");
}
// Our new function can be called by its name: showMessage().
showMessage();
showMessage();

// We can pass arbitrary data to functions using parameters.
function showMessage2(from, text) {
  // parameters: from, text
  console.log(from + ": " + text);
}
showMessage2("Xarm", "Hello!"); // Xr
showMessage2("Techathon", "What's up?"); // Ann: What's up?

// A function can return a value back into the calling code as the result.
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
console.log(result); // 3

// There is another syntax for creating a function that is called a
//  Function Expression. It allows us to create a new function
// in the middle of any expression.
let sayHi = function () {
  console.log("Hello");
};

// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// It’s called “arrow functions”, because it looks like this:
// let func = (arg1, arg2, ..., argN) => expression;

// Let’s see a concrete example:

let sum1 = (a, b) => a + b;
const val = sum1(4, 6);
const mm = (a) => a + 2;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log(sum1(1, 2)); // 3

/**** ARRAYS */
// empty array
const myList = [];

// array of numbers
const numberArray = [2, 4, 6, 8];

// array of strings
const stringArray = ["eat", "work", "sleep"];

// array with mixed data types
const newData = ["work", "exercise", 1, true];

// There are two syntaxes for creating an empty array:
let arr = new Array();
let arr1 = [];

// Almost all the time, the second syntax is used.
//We can supply initial elements in the brackets:
let fruits = ["Apple", "Orange", "Plum"];

// We can get an element by its number in square brackets:
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

// We can replace an element:
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

// …Or add a new one to the array:
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

// The total count of the elements in the array is its length:
console.log(fruits.length);

/***OBJECTS */
// An empty object (“empty cabinet”) can be created using one of two syntaxes:

let userr = new Object(); // "object constructor" syntax
let userrr = {}; // "object literal" syntax

// We can immediately put some properties into {...} as “key: value” pairs:
// The syntax to declare an object is:
const object_name = {
  key1: value1,
  key2: value2,
};

let myclass = {
  name: "NodeJs",
  week: 1,
  true: "My Val",
  k: true,
  kk: {
    id: 1,
    school: "Techathon",
  },
};

// Property values are accessible using the dot notation:
console.log(myclass.name); // NodeJs
console.log(myclass.week); // 1

// We can also use multiword property names, but then they must be quoted:
let myclass2 = {
  name: "NodeJs",
  week: 1,
  "our mentor": "Rasta",
};

// For multiword properties, the dot access doesn’t work:
console.log(myclass2["our mentor"]);

// We can use square brackets in an object literal, when creating an object.
//That’s called computed properties.
const mykey = "love";
const obj = {
  name: "My name",
  [mykey]: "My Computed Property",
};
console.log(obj);

// In JavaScript, an object can also contain a function.
//method is a property containing a function declaration
const person = {
  name: "Rasta",
  age: 2,
  // using function as a value
  greet: function () {
    console.log("hello");
  },
};

person.greet(); // hello

// To access a property of an object from within a method of the same object, you need to use the this keyword. Let's consider an example.

const person2 = {
  name: "John",
  age: 3,
  // accessing name property by using this.name
  greet: function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};

person2.greet();

/**** JavaScript Destructuring */
// The destructuring assignment introduced in ES6 makes
//it easy to assign array values and object properties
//to distinct variables. For example,

// Before ES6:
const person3 = {
  name: "Rasta",
  gender: "male",
};

let name = person3.name;
let gender = person3.gender;

console.log(name); // Rasta
console.log(gender); // male

// From ES6:
// assigning object attributes to variables
const person4 = {
  community: "Techathon",
  language: "NodeJs",
};
// destructuring assignment
let { community, language } = person4;

//array
//You can also perform array destructuring in a similar way.
const arrValue = ["one", "two", "three"];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

// You can assign the default values for variables while using destructuring.
let arrValue2 = [10];

// assigning default value 5 and 7
let [x2 = 5, y2 = 7] = arrValue;

console.log(x2); // 10
console.log(y2); // 7

const objO = {
  key: "value",
};

// assign default value 26 to age if undefined
const { key, cant = "find" } = objO;

console.log(key); // key
console.log(cant); // find

// You can skip unwanted items in an array without assigning them to local variables. For example,
const arrValue3 = ["one", "two", "three"];

// destructuring assignment in arrays
const [x3, , z3] = arrValue3;

console.log(x3); // one
console.log(z3); // three

// You can assign the remaining elements of an array to a variable using the spread syntax .... For example,

const arrValue4 = ["one", "two", "three", "four"];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x4, ...y4] = arrValue4;

console.log(x); // one
console.log(y); // ["two", "three", "four"]

// You can also assign the rest of the object properties to a single variable. For example,

const objK = {
  p1: "val1",
  p2: "val2",
  p3: "val3",
  p4: "val4",
};

// destructuring assignment
// assigning remaining properties to rest
let { p1, ...rest } = person;

console.log(p1); // val1
console.log(rest); // {p2: "val2", p3: "val3", p4: "val4"}

/** CONTROL STRUCTURES */
//Conditional statements

//if statement
const number = 10;
// check if number is greater than 0
if (number > 0) {
  // the body of the if statement
  console.log("The number is positive");
}

//if…else Statement

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is either a negative number or 0");
}

// if...else if Statement
// check if the number if positive, negative or zero

if (number > 0) {
  console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
  console.log("The number is negative");
}

// switch statement
const track = "NodeJs";
switch (track) {
  case "reactjs":
    console.log("Techathon React Class");
    break;
  case "Node":
  case "NodeJs":
    console.log("Techathon NodeJs Class");
    break;
  default:
    console.log(`Techathon unknown track: ${track}.`);
}

//Loop Statements
//for loop
const n = 5;
for (let i = 1; i <= n; i++) {
  console.log(`I love JavaScript.`);
}

//while loop
let i = 1,
  k = 5;

while (i <= k) {
  console.log(i);
  i += 1;
}

//do-while loop
let a = 1,
  b = 5;

do {
  console.log(i);
  i += 1;
} while (a < b);

//break statement
// program to print the value of i
for (let i = 1; i <= 5; i++) {
  // break condition
  if (i == 3) {
    break;
  }
  console.log(i);
}

//continue statement
for (let i = 1; i <= 5; i++) {
  // condition to continue
  if (i == 3) {
    continue;
  }

  console.log(i);
}

// There are also other types of loops. The for..in loop in JavaScript allows
// you to iterate over all property keys of an object.

const student = {
  name: "Monica",
  class: 7,
  age: 12,
};

for (let key in student) {
  // display the properties
  console.log(`${key} => ${student[key]}`);
}

// You can also use for...in loop to iterate over string values. For example,
const string = "code";

for (let i in string) {
  console.log(string[i]);
}

// You can also use for...in with arrays. For example,
const arr7 = ["hello", 1, "JavaScript"];

// using for...in loop
for (let x in arr7) {
  console.log(arr[x]);
}

// The for..of loop in JavaScript allows you to iterate over iterable objects
//(arrays, sets, maps, strings etc).
// array
const students = ["John", "Sara", "Jack"];

// using for...of
for (let element of students) {
  // display the values
  console.log(element);
}

// You can use for...of loop to iterate over string values. For example,

// string
const string2 = "code";

// using for...of loop
for (let i of string2) {
  console.log(i);
}

/**JAVASCRIPT CLASSES */
const techathon = {
  track: "Nodejs",
  version: 1.0,
  tutor: "Rasta",
  students: {
    count: 44,
    active: 18,
  },
};
class NameOfClass {
  // class methods
  constructor() {}
  method1() {}
  method2() {}
}
// creating a class
class Track {
  constructor(name) {
    this.name = `Techathon -> ${name}`;
  }
}

// creating an object
const track1 = new Track("React");
const track2 = new Track("NodeJs");

console.log(track1.name);
console.log(track2.name);

class Person {
  constructor(name) {
    this.name = name;
  }
  // defining method
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let person1 = new Person("John");

// accessing property
console.log(person1.name); // John

// accessing method
person1.greet(); // Hello John

// Getters and Setters
// In JavaScript, getter methods get the value of an object and
// setter methods set the value of an object.
class Person1 {
  constructor(name) {
    this.name = name;
  }

  // getter
  get personName() {
    return this.name;
  }

  // setter
  set personName(x) {
    this.name = x;
  }
}

let p = new Person("Jack");
console.log(p.name); // Jack

// changing the value of name property
p.personName = "Sarah";
console.log(p.name); // Sarah

// Class Inheritance
// Inheritance enables you to define a class that takes all
// the functionality from a parent class and allows you to add more.
// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {}

let s1 = new Student("Rasta");
s1.greet();

// The super keyword used inside a child class denotes its parent class.
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    console.log("Creating student class");
    // call the super class constructor and pass in the name parameter
    super(name);
  }
}

let s2 = new Student("Rasta");
s2.greet();

//real-example of inheritance
// add one more method to it (can do more)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arrT = new PowerArray(1, 2, 5, 10, 50);
alert(arrT.isEmpty()); // false

// Class Static methods
// Static methods are executed on the class instead of instance of a class
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Ford");

console.log(Car.hello(myCar));

//example2
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();

console.log(article.title); // Today's digest

/*** ASYNC PROGRAMS */
//callback
// In JavaScript, you can also pass a function as an argument to a function.
// This function that is passed as an argument inside of another function is
// called a callback function. For example,

// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Rasta", callMe);
greet("Rasta", function () {
  console.log("This is defined straine");
});

///Promise
// In JavaScript, a promise is a good way to handle asynchronous operations
// To create a promise object, we use the Promise() constructor.

let promise = new Promise(function (resolve, reject) {
  //do something
});

let promise2 = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

let promise3 = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// Consumers: then, catch, finally
// resolve runs the first function in .then
promise2.then((result) => console.log(result));
promise3.catch((result) => console.log(result));
promise3.finally(() => {
  console.log("Finally");
});

//ASYNC/AWAIT
// The word “async” before a function means one simple thing:
// a function always returns a promise. Other values are wrapped in a
// resolved promise automatically.
async function f() {
  return 1;
}
f().then(alert); // 1

// We could explicitly return a promise, which would be the same:
async function f() {
  return Promise.resolve(1);
}
f().then(alert); // 1

// There’s another keyword, await, that works only inside async functions.
let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
});
async function f() {
  let result = await promise4; // wait until the promise resolves

  console.log(result); // "done!"
}
f();

// If a promise resolves normally, then await promise returns the result.
// But in the case of a rejection, it throws the error, just as if there
// were a throw statement at that line.
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
f();

//try/catch
async function f() {
  try {
    let response = await promise3;
  } catch (err) {
    console.log(err);
  }
}
f();
