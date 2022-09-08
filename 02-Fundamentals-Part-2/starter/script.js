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

// Until now, we've been using arrays to store multiple values in a single variable.  Looking at the friends array, we know that Jonas is related to the firstName var, but there's no way to show this in arrays.  Hence, objects allow us to use key:value pairs inside of {} (rather than [])to essentially label values with a key (or var name) ..

// const jonasArray = [
//     'Jonas',
//     'Scmedtmann',
//     2037 - 1991,
//     'teacher',
//     [`Michael`, `Steven`, `Peter`]
// ];

// // could have firstName, lastName, age, job, friends as var labels

// const jonasObject = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: [`Michael`, `Steven`, `Peter`]
// };

// console.log(jonasObject);

// Object literal syntax - many ways to write objects, this is the simplest

// Note: array needs order (access via index) but for objects, order doesn't matter .. We will see how to access data in the next section ..


// DOT VS BRACKET NOTATION

// Dot Notation
// Want the lastName - just use jonas.lastName
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: [`Michael`, `Steven`, `Peter`]
// };

// console.log(jonas.lastName);  // Schmedtmann

// // Brackets
// // Do the same thing using bracket notation!!
// // Can use expression when using []

// console.log(jonas['lastName']);  // Schmedtmann


// const nameKey = "Name";
// console.log(jonas['first' + nameKey]);  // Jonas
// console.log(jonas['last' + nameKey]);  // Schmedtmann

// // same thing would NOT work with the dot notation - must use final property name (not computed!!)

// // don't know which property we want to know yet - will get it via prompt

// const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);

// console.log(jonas[interestedIn]);
// console.log(jonas.interestedIn);

// // If you choose to answer the prompt with something other than the keys suggested, you will get an 'undefined'.  We can use this truthy/falsey scenario to handle the undefined state!!! Note also, how the . notation will also result in 'undefined', as it can't handle the computed value.

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong Request!');
// }

// // add some data to the object

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);

// // Challenge - write sentence in dynamic way
// // Jonas has 3 friends, and his best friend is called Michael"
// // Need Jonas, 3 and Michael (first friend in array)

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// OBJECT METHODS

// update object to show birthYear and Boolean data type
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: [`Michael`, `Steven`, `Peter`],
//     hasDriversLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicence ? `has a driver's licence` : `does not have a driver's licence`}`
//     }

// };

// // Note that functions are values, and as such, can be stored as a value in an object's key:value pairing!!

// // Method = value that holds a function

// // console.log(jonas.calcAge(1991)); // 46 dot notation
// // console.log(jonas['calcAge'](1991)); // 46 bracket notation

// // access birthYear directly from the object without having to pass it in!

// console.log(jonas.calcAge()); // 46 using this keyword to ref birthYear

// // this - great not to hard-code the object name in case it changes

// // most efficient method is the third one which does the calc once and stores the value in this.age.  For larger calcs, it would be time-consuming to do the calc each time that the method is called!!!

// console.log(jonas.age); // 46 stored as this.age

// // Mini-challenge
// // Write a method to produce a summary sentence dynamically - "Jonas is a 46-year old teacher, and he has a driver's licence" (or " has not a driver's licence if hasDriversLicence is false")

// // see getSummary method above!!!

// console.log(jonas.getSummary());

// // Note: because arrays can have methods (e.g. jonas.length), arrays are also objects (special type)!!!

// 45. CODING CHALLENGE #3

// 46. ITERATION: THE FOR LOOP

// for loop keeps running while condition is TRUE

// print to the console - Lifting weights repetition n' (where n is the rep number)
// use a for loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };

// 47. LOOPING ARRAYS, BREAKING AND CONTINUING

// grab old jonas array

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     [`Michael`, `Peter`, `Steven`],
//     true
// ];

// loop to print out all the values of the array + their type

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof (jonas[i]));
// }

// // create an empty array to house the types

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof (jonas[i]));

//     // types[i] = typeof jonas[i]; // filling the types array (Method 1)
//     types.push(typeof (jonas[i])); // filling the types array (Method 2 - maybe cleaner)
// }

// console.log(types); //  ['string', 'string', 'number', 'string', 'object', 'boolean']

// // Say we want to loop through the years array and calculate the ages given that the current year is 2037

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break

// // checks type of array element
// // if a string, continues to print the element and its type
// // if not a string, will 'continue' to the next iteration of the loop
// // if not a string, 'break' will NOT continue to the next iteration and exits the loop

// console.log(`-----  ONLY STRINGS -------`);
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof (jonas[i]));
// }

// console.log(`----- BREAK WITH NUMBER -------`);
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof (jonas[i]));
// }


// 48. LOOPING BACKWARDS AND LOOPS IN LOOPS

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// // 0, 1, 2, 3  = Forward Loop
// // 4, 3, 2, 1, 0 = Backward Loop

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// // Loop in a loop
// // remember the gym repetition exercise

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------Starting exercise ${exercise}`);
//     // second loop within the first
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// 49. THE WHILE LOOP

// go back to the exercise for loop
// for (let rep = 1; rep = 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// How do we rewrite this using a WHILE loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// use a while loop when you don't know the number of iterstions beforehand
// roll of a dice 1-6
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end`);
// }

