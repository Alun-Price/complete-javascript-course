// let js = 'amazing';
// if (js === 'amazing') alert('Javascript is FUN!!');

// console.log(40 + 8 + 23 - 10);

// console.log('Alun');
// console.log(23);

// let firstName = "Alun";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "scientist";
// let mySecondJob = "programmer";

// console.log(myFirstJob);


/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Price");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

const job;
*/

/*
// Arithmetic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Alun";
const lastName = "Price";

console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
console.log(x);
x += 10;  // x = x + 10
console.log(x);
x++;  // x = x + 1
console.log(x);
x--; // x = x - 1
console.log(x);

// Assignment Operators
console.log(ageJonas > ageSarah);  // true
console.log(ageSarah >= 18);  // true

console.log(now - 1991 > now - 2018)
*/

// Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
////////////////////////////////////
// Strings and Template Literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

*/
////////////////////////////////////
// Taking Decisions: if / else Statements
/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

//  TYPE CONVERSION
// const inputYear = '1991';
// console.log(inputYear + 18);  // is a string so calc won't work

// result = 199118 - get concatenation

// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18); // now will work as a number = 2009

// // what if we try to convert something that is NOT a number
// console.log(Number(`Jonas`));

// // NaN = not a number is the result = actually means "Invalid Number"

// console.log(typeof NaN);  // weird output of number

// // TYPE COERCION
// console.log(`I am ` + 23 + ` years old`);  // I am 23 years old
// console.log(`23` - `10` - 3); // Number 10
// console.log(`23` + `10` + 3); // String 23103 because of +
// console.log(`23` / 2); // Number 11.5

// let n = '1' + 1;  // string `11`
// n = n - 1; // 11 - 1 = 10
// console.log(n); // output is Number 10

// 2 + 3 + 4 + '5' = `95`
//   `10` - `4` - `3` - 2 + '5' = `15`

// Truthy and Falsey Values

// 5 Falsey Values : 0, '', undefined, null, NaN
// ALL these not-exactly-false values will be converted to false when we convert them to a Boolean

// console.log(Boolean(Number(`Alun`))); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean({})); // true

// const money = 0;
// if (money) {
//   console.log(`Don't spend it all ;)`);
// } else {
//   console.log(`You should get a job!`);
// }

// // falsey - You should get a job!

// let height;
// console.log(typeof height); // undefined
// if (height) {
//   console.log(`YAY! Height is defined`);
// } else {
//   console.log(`Height is UNDEFINED!`);
// }

// let height = 0;
// if (height) {
//   console.log(`YAY! Height is defined`);
// } else {
//   console.log(`Height is UNDEFINED!`);
// }

// // We get `Height is UNDEFINED! because 0 is falsey!! This can be seen as a bug!!

// const age = 18;
// if (age === 18) console.log(`You are an adult :D`);

// 18 === 18 - true; 18 === 19 - false

// '18' == 18 - true as double == performs type COERCION
// '18' === 18 - false as triple == does not perform type COERCION

// const age = '18';
// if (age === 18) console.log(`You are an adult :D (strict)`);
// if (age == 18) console.log(`You are an adult :D (loose)`);

// Avoid the loose equality as it introduces some weird bugs

// const favourite = prompt("what's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) { // this will work because of ==
//   console.log(`Cool! 23 is an amazing number`);
// }
// // we can introduce else if to look at other conditionals

// if (favourite === 23) { // this will NOT work because of ===
//   console.log(`Cool! 23 is an amazing number`);
// } else if (favourite === 7) {
//   console.log(`7 is also a cool number!!`);
// } else if (favourite === 9) {
//   console.log(`9 is also a cool number!!`);
// } else {
//   console.log(`Number is not 23 or 7 or 9??? Not cool!`);
// }

// // different operator

// if (favourite !== 23) console.log(`Why not 23?)`);

// BOOLEAN LOGIC

// Example : 
// a: Sarah has a drivers licence
// b: Sarah has good vision

// Two boolean vars that can be true or false

// AND = both statements must be TRUE for result to be TRUE

// OR = one of the statements must be TRUE for the result to be TRUE

// ! = inverts the Boolean, so TRUE becomes FALSE and FALSE becomes TRUE.  This takes precedence and is calculated before the overall AND/OR is evaluated.

// You can use truth tables here but they should not be needed going forward ..

// LOGICAL OPERATORS

// const hasDriversLicence = true;
// const hasGoodVision = true;

// console.log(hasDriversLicence && hasGoodVision);

// const hasDriversLicence = true;
// const hasGoodVision = false;

// console.log(hasDriversLicence && hasGoodVision); // false
// console.log(hasDriversLicence || hasGoodVision); // true
// console.log(!hasDriversLicence); // false

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah should drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

// const hasDriversLicence = true;
// const hasGoodVision = true;
// const isTired = false;
// console.log(hasDriversLicence && hasGoodVision && !isTired); //true

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log(`Sarah should drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

// sarah should drive

// SWICH STATEMENTS

// const day = `saturday`;
// switch (day) {
//   case `monday`:
//     console.log('Plan course structure');
//     console.log('Go to coding meeting');
//     break;
//   case `tuesday`:
//     console.log(`Prepare theory videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Write code examples`);
//     break;
//   case `friday`:
//     console.log(`Record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Enjoy the weekend`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }

// Statements and Expressions

// Statement = like sentence that doesn't in itself produce a value

// Expression = piece of code that produces a IDBCursorWithValue

// The Conditional (Ternary) Operator

// const age = 23;

// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

// let drink2;

// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }

// console.log(drink2);  // wine

// // allows operator inside of the template literal

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
// // I like to drink wine

























