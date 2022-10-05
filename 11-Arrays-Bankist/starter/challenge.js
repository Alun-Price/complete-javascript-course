'use strict';

// 148. Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// Data1
// const dogAgeJulia = [3, 5, 2, 12, 7];
// const dogAgeKate = [4, 1, 15, 8, 3];
// // Data2
// const dogAgeJulia2 = [9, 16, 6, 8, 3];
// const dogAgeKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (arr1, arr2) {
//   const juliaCorrected = arr1.slice(1, -2);
//   const dogArray = [...juliaCorrected, ...arr2];
//   dogArray.forEach(function (age, i, array) {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old"`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs(dogAgeJulia, dogAgeKate);
// checkDogs(dogAgeJulia2, dogAgeKate2);

// coding challenge #2

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);

//   const dogsOver18 = humanAges.filter(human => human >= 18);
//   console.log(dogsOver18);

//   const aveHumanAge = dogsOver18.reduce(
//     (acc, humanAge, i, arr) => acc + humanAge / arr.length,
//     0
//   );
//   console.log(aveHumanAge);
//   return aveHumanAge;
// };

// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

// CODING CHALLENGE #3

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = ages => {
//   const aveHumanAge = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(human => human >= 18)
//     .reduce((acc, humanAge, i, arr) => acc + humanAge / arr.length, 0);
//   console.log(aveHumanAge);
//   return aveHumanAge;
// };

// calcAverageHumanAge(data1); // 44
// calcAverageHumanAge(data2); // 47.3333333333336

// 167. Coding Challenge 4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
// Test data:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// My Solution
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// dogs.forEach(function (dog) {
//   dog.recommendedFood = dog.weight * 0.75 * 28;
//   dog.foodRangeMax = dog.recommendedFood * 1.1;
//   dog.foodRangeMin = dog.recommendedFood * 0.9;
//   if (dog.owners.includes('Sarah')) {
//     if (dog.curFood > dog.foodRangeMax) {
//       console.log(`Sarah's dog is eating too much!`);
//     } else if (
//       dog.curFood < dog.foodRangeMax &&
//       dog.curFood > dog.foodRangeMin
//     ) {
//       console.log(`Sarah's dog is eating in the right food range!`);
//     } else {
//       console.log(`Sarah's dog is eating too little!`);
//     }
//   }

//   dog.owners.forEach(function (owner) {
//     if (dog.curFood > dog.foodRangeMax) {
//       ownersEatTooMuch.push(owner);
//     } else if (dog.curFood < dog.foodRangeMin) {
//       ownersEatTooLittle.push(owner);
//     }
//   });
// });

// console.log(dogs);
// console.log('MUCH', ownersEatTooMuch);
// console.log(`LITTLE:`, ownersEatTooLittle);
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3. Create an array containing all owners of dogs who eat too much // ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// My Solution
// if (ownersEatTooMuch.length != 0) {
//   let str = `${ownersEatTooMuch[0]}`;
//   let arraySize = ownersEatTooMuch.length;

//   for (let i = 1; i < arraySize; i++) {
//     str = str.concat(` and ${ownersEatTooMuch[i]}`);
//   }

//   str = str.concat(`'s dogs eat too much`);
//   console.log(str);
// }

// if (ownersEatTooLittle.length != 0) {
//   let strLittle = `${ownersEatTooLittle[0]}`;
//   let arraySize = ownersEatTooLittle.length;

//   for (let i = 1; i < arraySize; i++) {
//     strLittle = strLittle.concat(` and ${ownersEatTooLittle[i]}`);
//   }

//   strLittle = strLittle.concat(`'s dogs eat too little`);
//   console.log(strLittle);
// }

// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// some = any

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)

// const checkEatingOkay = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// // 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)

// const dogsEatingOkay = dogs.filter(dog => checkEatingOkay(dog));
// console.log(dogsEatingOkay);

// // 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

// const dogCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogCopy);

// // My Solution - sorts into an array of just the recFood values, above solution sorts the objects themselves in the array
// const shallowDogs = [...dogs];
// console.log(shallowDogs);

// const dogRecFood = [];
// const sortDogs = shallowDogs.forEach(function (dog) {
//   dogRecFood.push(dog.recFood);
//   dogRecFood.sort((a, b) => a - b);
// });
// console.log(dogRecFood);