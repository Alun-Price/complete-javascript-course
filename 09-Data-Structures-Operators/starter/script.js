'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log('Main Ingredient: ' + mainIngredient);
    console.log('Other Ingredient(s): ' + otherIngredients);
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// to do the same thing but for vars x, y and z (instead of a, b, c)
// const [x, y, z] = arr; // destructuring from the right side - original array not destroyed
// // Note: don't forget to declare vars!!!!
// console.log(x, y, z); // 2, 3, 4
// console.log(arr); // original array not destroyed

// const [first, , second] = restaurant.categories;
// console.log(first, second); // Italian Vegetarian - skipped the second cat option

// // switch the categories
// let [main, , secondary] = restaurant.categories;
// console.log('Before Switch: ' + main, secondary);
// [main, secondary] = [secondary, main];
// console.log('After Switch: ' + main, secondary);

// // make an order
// console.log(restaurant.order(2, 0)); // 'Garlic Bread', 'Pizza'

// // receive two return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log('Starter: ' + starter, 'Main: ' + mainCourse); // Starter: Garlic Bread Main: Pizza

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j); // 2, [5, 6]
// // but what if we want the 5 and 6 of the nested array as separate variables
// // do destructuring inside of destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2 5 6

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1

// DESTRUCTURING OBJECTS
// To destructure, we use the symbols that create the structure -> [] for arrays, {} for objects!!
// const { name, openingHours, categories } = restaurant;
// //console.log(name, openingHours, categories); // as expected = name, openingHours object and cat array
// // give new var names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags); // as above with new var names
// console.log(tags[1]); // Pizzeria

// const { menu = [], starterMenu: starters = [] } = restaurant;
// // say we want to change a name in data received from 3rd party
// // above checks for menu - it won't find it - so uses [] default - gets undefined without default
// // it also checks for starterMenu - it will find it - calls it starters
// console.log(menu, starters); // [], ['Focaccia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad']
// console.log(starters[2]); // Garlic Bread

// //Mutating Object Vars
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // {a, b} = obj; // Uncaught SyntaxError: Unexpected token '='; sees {} and expects object structure
// ({ a, b } = obj); // FIX: wrap in ()
// console.log(a, b); // 23 7 - overwrites a and b from lets

// // nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // 11 23 - the closing hours of Fri

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via de Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// }); // Order Received! Garlic Bread and Risotto will be delivered to Via de Sole, 21 at 22:30

// THE SPREAD OPERATOR

// Say we have an array and we want to copy the array but add some new elements at the start
// we could use a loop or do it manually but the SO really helps here
// const arr = [7, 8, 9];
// const arrSpread = [5, 6, ...arr];
// console.log(arrSpread); // [5, 6, 7, 8, 9]
// console.log(...arrSpread); // 5 6 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// // SO takes all the elements from an array BUT it also does NOT create new variables!!!
// // can only use it where otherwise we would write values separated by commas

// // 2 Uses of SO = Shallow Copies of an Array; Merge 2 Arrays Together
// // shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // merge starter and main menus
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// // SO - works on all iterables [arrays, strings, maps and sets BUT NOT Objects!!!]

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); //  ['J', 'o', 'n', 'a', 's', ' ', 'S.']
// console.log(...str); // J o n a s
// // console.log(`${...str} Schmedtmann`); // Uncaught SyntaxError: Unexpected token '...'
// // ... only really expected in a function or building into an array, not in a string literal!!

// // build our own function that takes multiple arguments and uses the SO
// // [see orderPasta method in main restaurant object data at top of script!!]
// // get ingredients from prompt window!!!

// const ingredients = [
//   prompt("Let's make pasta!! Ingredient1 ?"),
//   prompt('Ingredient 2 ?'),
//   prompt('Ingredient 3 ?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects

// const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
// console.log(newRestaurant); // same as restaurant obj but with new props

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); // Ristorante Roma
// console.log(restaurant.name); // Classico Italiano
// // different names shows that we did make a copy, as otherwise changing the name would change it for both !!!

// REST PATTERNS AND PARAMETERS

// Spread on right side of =, Rest on left side of =

// const arr = [1, 2, ...[3, 4]]; // SPREAD
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST
// console.log(a, b, others); // 1 2 (3) [3, 4, 5]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); // Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // Objects - and REST Operator
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // {thu: {…}, fri: {…}}

// // (2) Functions // use RO to take any number of parameters and pack them into an array to add them
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3); // 5
// add(8, 2, 5, 3, 2, 1, 4); // 25
// const x = [3, 5, 7];
// add(...x); // 15 - adds contents of array

// // edge cases
// // add orderPizza function to restaurant data at start of script
// // has a main ingredient and other ingredients
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'peppers');
// // Main Ingredient: mushrooms
// // Other Ingredient(s): onion,olives,peppers
// restaurant.orderPizza('mushrooms');
// // Main Ingredient: mushrooms - no other ingredients!!

// SHORT CIRCUITING (&& AND  ||)

// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // 'Jonas' - falsey - looks at second
// console.log(true || 0); // true = result
// console.log(undefined || null); // null - falsey - go to second - result= null (even though also falsey)
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // skips falsey values - Hello - 1st truthy result

// // result does NOT have to be Boolean
// // can use any data type
// // can return any data type
// // short-circuiting
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 23

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); // 23

// // Note : if numGuests = 0; the above does NOT work - result: 10 - we will get a solution to this later

// console.log(`--------- AND --------------`);
// console.log(0 && 'Jonas'); // 0 sc's when first value is false [opposite of ||]
// console.log(7 && 'Jonas'); // Jonas - first value is true, therefore no sc -> second value
// console.log('Hello' && 23 && null && 'Jonas'); // passes first 2 as are true - result: null

// if (restaurant.orderPizza) {
//   // checking if orderPizza exists
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // replace the if with && operator [dis: hard to read!!]
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// THE NULLISH COALESCING OPERATOR
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests); // 10, as 0 value = falsey!!!!
// // ES22 - nullish

// const guestCorrect = restaurant.numGuests ?? 10;
// // works with nullish values = null or undefined [so 0 is seen as true]
// console.log(guestCorrect); // result = 0

// LOGICAL ASSIGNMENT OPERATORS
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// //checks if numGuests value, if not numGuests = 10
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// // concise version of above two lines
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // if numGuests = 0, it will = 10.  [similar to last section]
// // therefore lets use the nullish operator

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1); // object with numGuests = 20
// console.log(rest2); // object with numGuests = 10

// // AND assignment operator [replace a var that is already assigned]
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // <ANONYMOUS>

// rest1.owner &&= '<ANONYMOUS>'; // no undefined, no owner in object
// rest2.owner &&= '<ANONYMOUS>'; // owner: '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);
