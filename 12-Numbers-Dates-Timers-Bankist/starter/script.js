'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-08-24T14:11:59.604Z',
    '2022-09-01T17:01:17.194Z',
    '2022-09-30T23:36:17.929Z',
    '2022-10-02T17:49:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`; // Note returns stop fn executing

  // const day = `${date.getDate()}`.padStart(2, 0); // to make 03/10/2022 - see 03 and not just 3
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    //labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov} </div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedBal = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(acc.balance);
  labelBalance.textContent = `${formattedBal} `;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const formattedInc = formatCur(incomes, acc.locale, acc.currency);
  labelSumIn.textContent = `${formattedInc} `;

  let out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const formattedOut = formatCur(Math.abs(out), acc.locale, acc.currency);
  labelSumOut.textContent = `${formattedOut} `;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  const formattedInt = formatCur(interest, acc.locale, acc.currency);
  labelSumInterest.textContent = `${formattedInt} `;
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 secs, stop the timer
    if (time < 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    // Decrease 1 sec
    time--;
  };
  // set timer to 5 mins
  let time = 30;

  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'short', // can be long, short or narrow
    };

    // labelDate.textContent = new Intl.DateTimeFormat('en-GB', options).format(now); // en-US = locale string [language-country]
    // As of 03/10/2022 in UK but 10/03/2022 in US
    //labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now); // arabic, Syria
    // can google ISO language table lingoes to get table of codes!!!

    // makes sense to get the locale from the browser
    // const locale = navigator.language;
    // console.log(locale); // en-GB
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); // uses locale in account array - As of segunda, 3 de outubro de 2022 às 19:06 in js account
    // in jd - en-US - As of Mon, October 3, 2022 at 7:07 PM

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add the transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer(); // start a new timer
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add the loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';

  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer(); // start a new timer
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// 170. Converting and Checking Numbers

// console.log(23 === 23.0); //true

// // Base 10 - 0 to 9
// // Base 2 - 0 1 = binary

// console.log(0.1 + 0.2); // should be 0.3 but is 0.30000000000000000004
// // get infinite fraction for 0.1, like 3/10 in base 10 = 3.3333333333333 ..
// // JS does some rounding behind the scenes to try and mask the effect, but in certain cases it just can't hide the issue
// // makes very precise scientific or financial calculations very difficult in JS - note: PHP uses same system!!!

// console.log(0.1 + 0.2 === 0.3); // should be true but is false!!!!

// console.log(Number('23')); // convert sting 23 to a Number
// console.log(+'23'); // alternative way to do this - use + which does the same conversion

// //  This is cleaner, so lets convert all the occurences of Number to + in script

// console.log(Number.parseInt('30px')); // tries to find a number - 30
// console.log(Number.parseInt('e23', 10)); // NaN because does NOT start with a number - the 10 hints base 10
// console.log(Number.parseInt('23e', 10)); // 23 because starts with a number - the 10 hints base 10

// console.log(Number.parseFloat('2.5rem')); // 2.5
// console.log(Number.parseInt('2.5rem')); // 2

// //  Only use to check if value is NaN
// console.log(Number.isNaN(20)); // false because is a number
// console.log(Number.isNaN('20')); // false = is a string
// console.log(Number.isNaN(+'20X')); // true = + makes it a number
// console.log(Number.isNaN(23 / 0)); // false = infinity

// // Ultimate method to check if vlaue is number
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false = is a string
// console.log(Number.isFinite(+'20X')); // false = is NaN
// console.log(Number.isFinite(23 / 0)); // false = is infinity = not finite

// console.log(Number.isInteger(20)); // true
// console.log(Number.isInteger('20')); // false = is a string
// console.log(Number.isInteger(+'20X')); // false = is NaN
// console.log(Number.isInteger(23 / 0)); // false = is infinity = not finite

// 171. Math and Rounding

// console.log(Math.sqrt(9)); // 3 = square root
// console.log(25 ** (1 / 2)); // square root too
// console.log(8 ** (1 / 3)); // cube root

// console.log(Math.max(5, 18, 23, 11, 2)); // max value is 23
// console.log(Math.max(5, 18, '23', 11, 2)); // does type coercion - 23 also
// console.log(Math.max(5, 18, '23px', 11, 2)); // NaN - cant handle the px

// console.log(Math.min(5, 18, 23, 11, 2)); // 2
// console.log(Math.min(5, 18, '23', 11, 2)); // 2
// console.log(Math.min(5, 18, '23px', 11, 2)); // NaN - cant handle the px

// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793 = pi * 100

// console.log(Math.random()); // as I reload, get a new random number between 0 and 1
// // Dice Roll
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// // console.log(randomInt(10, 20)); // generates random int between 10 and 20

// // Rounding Integer
// console.log(Math.trunc(23.3)); // 23 - float to integer

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.3)); // 24 - rounds up
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.3)); // 23 - rounds down
// console.log(Math.floor(23.9)); // 23

// // might think floor and trunc do the same thing, but not for negative numbers
// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.3)); // -24

// // Rounding Decimals
// console.log((2.7).toFixed(0)); // 3 - always returns a string!!!!!!
// console.log((2.7).toFixed(3)); // 2.700
// console.log((2.345).toFixed(2)); // 2.35
// console.log(+(2.345).toFixed(2)); // 2.35 - returns a number!!!

// Round the Loan Number in Bankist (I think I did this myself in earlier iteration)

// 172.  The Remainder Operator

// console.log(5 % 2); // 1 = 5/2 = 2 remainder 1
// console.log(8 % 3); // 2

// // check if even or odd
// console.log(6 % 2); // 0 - 6 is an even number
// console.log(7 % 2); // 1 = 7 is an odd number

// const isEven = n => n % 2 === 0;
// console.log(isEven(7)); // false as 7 is an odd number
// console.log(isEven(6)); // false as 6 is an even number

// // colouring rows in the Bankist app when click on balance
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered'; // every second row is orangered background colour
//     if (i % 3 === 0) row.style.backgroundColor = 'blue'; // every 3rd row is blue background colour
//   });
// });

// 173. Numeric Separators [ES2021]

// represent a really large number
// const diameter = 287_460_000_000;
// console.log(diameter);
// // Usually use a separator to separate out the number - the _ makes this obvious but JS doesnt see these separators

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = _3.1415; // cant put at start
// console.log(PI);

// console.log(Number('230_000')); // get Unexpected number

// // really only use _ to help in the code - it may introduce errors if you try to store the number or use it in an Api, etc...

// 174. Working with BigInt [ES2020]

// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// // Weird - sometimes work, sometimes don't past the magic max safe integer
// console.log(2 ** 53 + 1); // 9007199254740992
// console.log(2 ** 53 + 2); // 9007199254740994
// console.log(2 ** 53 + 3); // 9007199254740996
// console.log(2 ** 53 + 4); // 9007199254740996

// // we might need larger numbers in database IDs, interacting with other languages, etc...
// // new primitive to allow us to store numbers as large as we want

// console.log(53984758374583728475823748528347582375827582385n); // the n converts it to a bigint!!!
// console.log(BigInt(53984758374583728475823748528347582375827582385)); // slightly different number but shouldn't be

// // shouldn't mix bigint numbers with other number types
// // need to convert numbers to bigint - use the BigInt()
// console.log(10000n + 10000n); // 20000n
// const huge = 20204245243534253425453453n;
// const num = 23;
// console.log(huge + BigInt(num)); // 20204245243534253425453476n

// console.log(20n > 15); // true
// console.log(20n === 20); // false - JS doesnt do type-conversion on n
// console.log(typeof 20n); // bigint
// console.log(20n == 20); // true as ==

// console.log(huge + ` is a REALLY BIG number!!`); // works

// // divisions
// console.log(11n / 3n); // 3n

// 175. Creating Dates

// Create a DATE (4 ways)

// const now = new Date();
// console.log(now); // current date and time - Mon Oct 03 2022 14:15:49 GMT+0100 (British Summer Time)

// console.log(new Date('Aug 02 2020 18:05:41')); // Sun Aug 02 2020 18:05:41 GMT+0100 (British Summer Time)
// console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0000 (Greenwich Mean Time)
// console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 21:31:17 GMT+0000 (Greenwich Mean Time)

// console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0000 (Greenwich Mean Time)
// // Note: months are zero based, so 0 = Jan and here 10 = Nov!!!

// console.log(new Date(2017, 10, 33)); // JS will correct the month based on the days - know there arent 33 days in Nov
// // Sun Dec 03 2017 00:00:00 GMT+0000 (Greenwich Mean Time)

// console.log(new Date(0)); // Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time)
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // time in milliseconds - Sun Jan 04 1970 01:00:00 GMT+0100 (Greenwich Mean Time)

// // Working with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time)
// console.log(future.getFullYear()); // 2037 - DONT USE .getYear!!!
// console.log(future.getMonth()); // 10
// console.log(future.getDate()); // 19 - is actually the day, so DATE is a weird name!!! getDay = get day of the week!!!
// console.log(future.getDay()); // 4 = Thu
// console.log(future.getHours()); // 15
// console.log(future.getMinutes()); // 23
// console.log(future.getSeconds()); // 0
// console.log(future.toISOString()); // 2037-11-19T15:23:00.000Z - standard - useful
// console.log(future.getTime()); // 2142256980000 based on ms that have past since Jan 1 , 1970

// console.log(new Date(2142256980000)); // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time) = date from timestamp

// future.setFullYear(2040);
// console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0000 (Greenwich Mean Time)

// 176. Adding Dates to the Bankist App

// 177. Operations with Dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // divide by ms in a day // abs so we gat days between no matter which date is first

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 24));
// console.log(days1); // 20 days as expected

// NOTE: if you need to account for daylight savings, etc - moment.js is a really good library - Luxon
// Note: if you add time, you might not get an integer - keep in mind!!!

// 179. Intl with Numbers [Note: 178 Intl with Dates was wipoed exp in bankist code]

// Exp

// const num = 3884764.23;

// const options = {
//   style: 'currency',
//   unit: 'mile-per-hour',
//   currency: 'EUR', // currency is not implied by the locale (i.e. you can have euros in the US, for example) - must be defined here
//   // userGrouping: false,
// };

// console.log(new Intl.NumberFormat('en-US').format(num)); // 3,884,764.23
// console.log(new Intl.NumberFormat('de-DE').format(num)); // 3.884.764,23
// console.log(new Intl.NumberFormat('ar-SY').format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣
// console.log(new Intl.NumberFormat(navigator.language).format(num)); //3,884,764.23

// // options = style: unit, unit:'mile-per-hour'
// console.log(new Intl.NumberFormat('en-US', options).format(num)); // 3,884,764.23 mph
// console.log(new Intl.NumberFormat('de-DE', options).format(num)); // 3.884.764,23 mi/h
// console.log(new Intl.NumberFormat('ar-SY', options).format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣ ميل/س
// console.log(new Intl.NumberFormat(navigator.language, options).format(num)); // 3,884,764.23 mph

// // options = style:currency, currency: 'EUR'
// console.log(new Intl.NumberFormat('en-US', options).format(num)); // €3,884,764.23
// console.log(new Intl.NumberFormat('de-DE', options).format(num)); // 3.884.764,23 €
// console.log(new Intl.NumberFormat('ar-SY', options).format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣ €
// console.log(new Intl.NumberFormat(navigator.language, options).format(num)); // €3,884,764.23

// 180. Timers: setTimeout and setInterval

// setTimout = simply schedules a callback function to run ONCE after a certain amount of time!!!!

// setTimeout(
//   (ing1, ing2) => {
//     console.log(`Here is your pizza with ${ing1} and ${ing2}!! 🍕 `);
//   },
//   3000,
//   'peppers',
//   'mushrooms'
// ); // delay time in ms // Here is your pizza with peppers and mushrooms!! 🍕

// console.log('Waiting .... '); // aysnc js -> means this runs while the delay goes on

// const ingredients = ['spinach', 'mushrooms'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => {
//     console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
//   },
//   3000,
//   ...ingredients
// );
// console.log(`Waiting for my pizza!!!`);

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // cancels timeOut and pizza never comes!!!

// // setInterval = schedules a callback function to run REPEATEDLY after given intervals!!!!
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// clearInterval();

// CHALLENGE : Build a clock

// 181.  Implementing A Countdown Timer
