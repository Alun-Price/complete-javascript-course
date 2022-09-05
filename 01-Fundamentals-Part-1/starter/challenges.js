// Coding Challenge 1

// Mark and John compare BMIs

// BMI = mass / height ** 2

// Your tasks: 
// 1. Store Mark's and John's mass and height in variables 
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John. 

//TEST DATA

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall. 
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall. 

/*
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = bmiMark > bmiJohn;

console.log("For Data1, Mark's BMI is" + " " + bmiMark);
console.log("For Data1, John's BMI is" + " " + bmiJohn);
console.log("Data1: Mark has a higher BMI than John:" + " " + markHigherBMI);

// For Data2

massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);

markHigherBMI = bmiMark > bmiJohn;

console.log(`For Data2, Mark's BMI is ${bmiMark}`);
console.log(`For Data2, John's BMI is ${bmiJohn}`);
console.log(`Data2: Mark has a higher BMI than John: ${markHigherBMI}`);

markHigherBMI = bmiMark > bmiJohn;

*/
// Coding Challenge #2 
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it. 
// Your tasks: 
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
// BMI (28.3) is higher than John's (23.9)!" 
// Hint: Use an if/else statement 😉 

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is greater than John's!`)
} else {
    console.log(`Johns's BMI (${bmiJohn}) is greater than Mark's!`)
};

// For Data2

massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is greater than John's!`)
} else {
    console.log(`Johns's BMI (${bmiJohn}) is greater than Mark's!`)
};


