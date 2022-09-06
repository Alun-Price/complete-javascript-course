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

