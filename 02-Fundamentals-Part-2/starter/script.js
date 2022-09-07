'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log(`I can drive!`);
// deliberate error in hasDriverLicence is picked up by strict mode

// const Interface = 'Audio';
// const private = 534;
// these will be keywords in future JS, strict mode shows this!

// FUNCTIONS

// function logger() {
//     console.log(`My name is Alun!`);
// }

// // calling, running or invoking the function

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// FUNCTION DECLARATIONS V'S EXPRESSIONS    

// Function Declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge1(1973);
// console.log(age1);
// // 49

// //  Function Expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }

// const age2 = calcAge2(1973);
// console.log(age2);
// // 49

// // Arrow Function
// const calcAge3 = birthYear => 2022 - birthYear;

// const age3 = calcAge3(1973);
// console.log(age3);
// 49

// shorter, quicker to write, usually one-liner

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// }

// // note: only omit return in one line function

// console.log(yearsUntilRetirement(1973, `Alun`));

// FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// REVIEWING FUNCTIONS

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }


// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!!`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// INTRODUCTION TO ARRAYS

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // Or we could do this ...

// // create an array using the literal syntax
// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// const years = new Array(1991, 1984, 2000, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // js expects expression in [ ] 

// // Mutate the array - no longer friends with Peter - replace with Jay

// friends[2] = 'Jay';
// console.log(friends);

// // can't replace whole array, but can mutate them as they aren't primitives

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtman', 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // Note: see the way we can have a var (firstName), a calculation and an array (friends) as inputs in the array!!!

// // Exercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const year = new Array(1990, 1967, 2020, 2010, 2018);

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
// console.log(ages);


//  BASIC ARRAY OPERATIONS (METHODS)

// Add Elements
// const friends = [`Michael`, `Steven`, `Peter`];
// const newLength = friends.push('Jay');
// // push will add an element to end of the array
// console.log(friends);
// console.log(newLength); // 4 - gives new length of array

// friends.unshift('John');
// // unshift - adds element to front of array
// console.log(friends);

// //  Remove Elements

// // pop removes the last element from the array
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped); // returns the removed element (useful!)

// // shift removes the first element from the array
// friends.shift();
// console.log(friends);

// // .indexOf searches for an element and will return the index or -1 if not poresent in the array
// console.log(friends.indexOf("Steven")); // 1
// console.log(friends.indexOf("BOB")); // -1

// // .includes is more modern [ES6] and quite useful as it returns a boolean - TRUE if found in the array, FALSE if not!!
// console.log(friends.includes("Michael")); // True
// console.log(friends.includes("BOB")); // False

// // Note: tests with strict and doesn't do type coercion - therefore 23 is not the same as `23`!!

// if (friends.includes('Steven')) {
//     console.log(`You have a friend called Steven!!!`);
// }

//  INTRODUCTION TO OBJECTS

