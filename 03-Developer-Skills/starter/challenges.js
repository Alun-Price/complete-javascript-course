// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
*/

// Use the 4-step Framework
// Understand the Problem
// Wants to take the elements of the array and make them the oC temps of the string
// the day is the index of the array + 1
// looping through the array, build the string
// console.log the string once built

// Create sub-problems
// array to string
// build XoC part of string
// build days[i] + 1
// incorporate ...
// console.log string

// Research

// PseudoCode

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const printForecast = arr => {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += ` ${arr[i]}°C in ${i + 1} days ...`;
//   }
//   console.log(' ... ' + str);
// };

// printForecast(data1);
// printForecast(data2);
