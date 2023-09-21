let num = 41;
let food = "Soup";
var x = true;
const pers = { firstName: "John", lastName: "Wick" };
const cars = ["Volvo", "VW", "Tesla"];
let bi = BigInt("3405422438454602342569");
let nu = null;
const u = undefined;
let sym = Symbol("s");

console.log(typeof num);
console.log(typeof food);
console.log(typeof x);
console.log(typeof pers);
console.log(typeof cars);
console.log(typeof bi);
console.log(typeof nu);
console.log(typeof u);
console.log(typeof sym);

let num1 = 40;
let num2 = 63;
let num3 = 31;
let num4 = num1 + num2 + num3;

console.log(num4, num1 < num2, num2 >= num3, num3 === num2);

let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2);

const pers2 = {
  firstName: "Tom",
  secondName: "Riddle",
  job: "Dark Wizard",
  age: 71,
  status: "Dead",
};

console.log(pers2.job);
