'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // empty container - innerHTML like textContent but for HTML
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`; // finds type of movement
    // copy in HTML - remove date part as we'll do that later - use temp lit to fill in the details pertaining to account 1 but in the general sense as this fn will have to work with other account info
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov} €</div>
  </div>`;
    // see MDN for insertAdjacent HTML method - very useful
    containerMovements.insertAdjacentHTML('afterBegin', html);
  }); // we can use beforeend to reverse order how content is shown
};

displayMovements(account1.movements); // call the above fn for account 1

// use reduce to show the balance

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn - see class in html code (summary__value--in) and then ref vars set at top of script
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut - see class in html code (summary__value--out) and then ref vars set at top of script
  labelSumOut.textContent = `${Math.abs(out)} €`;

  // lets assume interest is paid on deposits only and at a rate of 1.2% (nice fictional bank!!)
  // new rule means only interest >= 1 will be paid
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

calcDisplaySummary(account1.movements);

// username = initials = stw
// Need to take the first letter and put it into an array - what a MAP does!!!
// used the forEach for its side effects
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

//console.log(containerMovements.innerHTML); // helps us to see what the innerHTML contains
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// If we have array methods, that means that arrays themselves are actually objects!!
// Arrays get access to a whole host of special, built-in methods (we'll talk about the prototype later!!)

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2)); // ['c', 'd', 'e'] - starts at pos 2 and runs to the end
// console.log(arr.slice(2, 4)); // ['c', 'd'] - starts at pos 2 and runs to pos 4 (not included)
// // Note: length = end pos - start pos -> 4 - 2 = length 2 = c, d
// console.log(arr.slice(-2)); // ['d', 'e'] -> last two pos
// console.log(arr.slice(-1)); // ['e'] -> last pos
// console.log(arr.slice(1, -2)); // ['b', 'c'] -> start pos 1 and runs to pos -2 (not included)
// console.log(arr.slice()); // gives you shallow copy of whole array, similar to spread operator method on next line ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// // SPLICE - changes/mutates the original array
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // ['a', 'b'] - original array
// arr.splice(-1); // remove last element of array
// console.log(arr); // ['a']

// // mdn array splice -> gives you details on array method
// console.log(arr); // back to ['a', 'b', 'c', 'd', 'e']
// arr.splice(1, 2); // start pos1, deleteCount 2 (inclusive) -> ['a', 'd', 'e']
// console.log(arr); // ['a', 'd', 'e']
// // you can add an Item too
// arr.splice(1, 0, 'z'); // Should delete nothing but insert z at pos 1
// console.log(arr); // ['a','z','d', 'e']

// // REVERSE (mutates)
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['f', 'g', 'h', 'i', 'j'] -> mutates the original array

// // CONCAT (does not mutate)
// const letters = arr.concat(arr2);
// // console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// //const letters = [...arr, ...arr2]; // SO method
// console.log(letters);

// // JOIN
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// // Note: No dev in the world knows ALL the methods - learn about them and use refs to work with them

// 143. THE NEW AT METHOD

// const arr = [23, 11, 64];
// console.log(arr[0]); // 23 -> existing method
// console.log(arr.at(0)); // 23 -> using the .at() method

// console.log(arr[arr.length - 1]); // common scenario in JS -> getting the last element
// console.log(arr.slice(-1)[0]); // getting the last element

// console.log(arr.at(-1)); // getting the last element -> helps with method chaining

// // also works on strings
// console.log('jonas'.at(-1)); // s

// 144. Looping Arrays : forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`------- forEach ----------`);
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// different ways of doing the same thing

// What if we want to loop over the index too?

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`------- forEach ----------`);
// movements.forEach(function (movement, i, array) {
//   // note: different order - movement comes first then index
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// // Note: You cannot break out of a forEach loop!!!!

// // 145. FOREACH WITH MAPS AND SETS

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`); // USD: United States dollar EUR: Euro GBP: Pound sterling
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique); // {'USD', 'GBP', 'EUR'}
// currenciesUnique.forEach(function (value, _, set) {
//   // Set doesnt have any difference between value and key [ _ = throwaway var]
//   console.log(`Currency Name: ${value}`);
// });

// 146. PROJECT "BANKIST" APP
// see Notes for intro to Bankist App

// 147. Creating DOM Elements

// MAP (new array - no mutation)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

// // same thing using for of loop
// const movementsUSDfor = [];

// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// // same thing using an arrow fn

// const usdArrow = movements.map(mov => mov * eurToUsd);
// console.log(usdArrow);

// // map has access to index element

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movements ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movements ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// }); // note its possible to have two returns, as long as only one is returned at a given time

// console.log(movementsDescriptions);
// ['Movements 1: You deposited 200', 'Movements 2: You deposited 450', 'Movements 3: You withdrew 400', 'Movements 4: You deposited 3000', 'Movements 5: You withdrew 650', 'Movements 6: You withdrew 130', 'Movements 7: You deposited 70', 'Movements 8: You deposited 1300']

// Note: forEach creates a side-effect -> loops and prints out each individual line -> map did not create a similar side-effect, and each element is returned in an array!!

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(deposits); // [200, 450, 3000, 70, 1300]

// // same but use for/of loop
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor); // [200, 450, 3000, 70, 1300]

// // withdrawals
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals); // [-400, -650, -130]

// 153. The REDUCE method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // accumulator is like a snowball (acc)
// // const balance = movements.reduce(function (acc, cur) {
// //   console.log(`Iteration ${i}: ${acc} --- ${cur}`);
// //   return acc + cur;
// // }, 0); // initial value of acc = 0

// // arrow fn version of above
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance); // 3840

// // same but by for /of loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2); // 3840

// // Using reduce to get a max value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]); // start at first value

// console.log(max);

// 155. The Magic of Chaining Methods
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0) // filter out withdrawals < 0
//   .map(mov => mov * eurToUsd) // convert to dollars
//   .reduce((acc, mov) => acc + mov, 0); // get the total

// console.log(totalDepositsUSD); // 5522
// can keep chaining methods as long as they return new arrays (i.e. reduce ends the chain - returns value rather than array)

// keep chaining methods to a minimum - lots of arrays are bad for performance (e.g. using lots of map methods when one will do).
// bad practice to use chain methods that mutate the original array (e.g. splice, reverse)
