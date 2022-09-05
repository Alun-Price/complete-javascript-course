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
