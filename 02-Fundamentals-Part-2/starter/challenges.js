// CODING CHALLENGES - PART2 - JS FUNDAMENTALS

// Coding Challenge #1 

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 
// Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team). 
// A team only wins if it has at least double the average score of the other team.
//     Otherwise, no team wins! 
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams 
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time 
// Test data: 
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints: 
// § To calculate average of 3 values, add them all together and divide by 3 
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 

// Coding Challenge #1 
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Data1
// // const avgDolphins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// // Data2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas} )`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins} )`);
//     } else {
//         console.log(`No teams win this time!!! ( Dolphins: ${avgDolphins} vs. Koalas: ${avgKoalas} )`);
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

//  Data1 - No teams win this time!!! ( Dolphins: 46 vs. Koalas: 56 )
// Data2 - Dolphins win (60 vs 29)


// Coding Challenge 2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. 
// Your tasks: 
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100 
// 2. And now let's use arrays! So create an array 'bills' containing the test data below 
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before 
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

// Test data: 125, 555 and 44 
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

// const calcTip = (billValue) => {
//     let tip;
//     if (billValue >= 50 && billValue <= 300) {
//         tip = billValue * 0.15;
//         return tip;
//     } else {
//         tip = billValue * 0.20;
//         return tip;
//     }
// }

// console.log(calcTip(100));

// bills = [125, 555, 44];

// tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];

// console.log(bills); // [125, 555, 44]
// console.log(tips); // [18.75, 111, 8.8]
// console.log(total); // [143.75, 666, 52.8]

// Note: can rewrite calcTip using ternary operator

//const calcTip = (billValue) => billValue >= 50 && billValue <= 300 ? tip = billValue * 0.15 : tip = billValue * 0.20;

