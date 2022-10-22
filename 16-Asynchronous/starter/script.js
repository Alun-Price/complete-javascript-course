'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const languages = Object.values(data.languages);
//     const currencies = Object.values(data.currencies);

//     let html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(2)} million</p>
//             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//             <p class="country__row"><span>💰</span>${currencies[0].name} ( ${
//       currencies[0].symbol
//     } )</p>
//         </div>
//     </article>`;

//     countriesContainer.insertAdjacentHTML('afterbegin', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('aruba');
// getCountryData('united kingdom');
// getCountryData('united states');
// getCountryData('Republic of Ireland');

// 250. Callback Hell

// const renderCountry = function (data, className = '') {
//   let language = Object.values(data.languages)[0];
//   let currency = Object.values(data.currencies)[0];

//   let html = `
//       <article class="country ${className}">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//               <h3 class="country__name">${data.name.common}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(2)} million</p>
//               <p class="country__row"><span>🗣️</span>${language}</p>
//               <p class="country__row"><span>💰</span>${currency.name} ( ${
//     currency.symbol
//   } )</p>
//           </div>
//       </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country
//     renderCountry(data);
//     //const borders = Object.values(data.borders);

//     // Get neighbour country

//     const neighbour = data.borders?.[0];
//     console.log(neighbour);
//     if (!neighbour) return;

//     // AJAX call country 2
//     let request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);

//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(`DATA2: `, data2);

//       // Render country
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// //getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('france');
// getCountryAndNeighbour('usa');

// 251. Promises and the Fetch API

// How Used To Work
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

// 252. Consuming Promises

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// We can simplify and clean the code above

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

// 253. Chaining Promises

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/alpha?codes=${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0], 'countryMain');
//       const neighbour = data[0]?.borders;
//       if (!neighbour) return; // won't work

//       // Country 2
//       return neighbour.forEach(code => {
//         fetch(`https://restcountries.com/v3.1/alpha?cod=${code}`)
//           .then(response => {
//             console.log(response);
//             if (!response.ok)
//               throw new Error(`Country not found ${response.status}`);
//             return response.json();
//           })
//           .then(data => renderCountry(data[0], 'neighbour'))
//           .catch(err => {
//             console.error(`${err} 💥 💥 💥`);
//             renderError(
//               `Something went wrong 💥 💥 ${err.message}. Try again!`
//             );
//           })
//           .finally(() => {
//             // .finally always happens regardless of promises
//             countriesContainer.style.opacity = 1;
//           });
//       });
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('ie');
// });

// 255. Throwing Errors Manually

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = `Something went wrong`) {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.com/v3.1/alpha?codes=${country}`,
//     `Country not found`
//   ).then(data => {
//     renderCountry(data[0], 'countryMain');
//     const neighbour = data[0]?.borders;
//     if (!neighbour) throw new Error('No neighbour found!');

//     // Country 2
//     return neighbour.forEach(code => {
//       getJSON(
//         `https://restcountries.com/v3.1/alpha?codes=${code}`,
//         'Neighbouring country not found'
//       )
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//           console.error(`${err} 💥 💥 💥`);
//           renderError(`Something went wrong 💥 💥 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//           // .finally always happens regardless of promises
//           countriesContainer.style.opacity = 1;
//         });
//     });
//   });
// };

// btn.addEventListener('click', function () {
//   getCountryData('ie');
// });

// 258. The EVENT LOOP in Practice

// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test End');

// Order = Test Start/Test End/Resolved promise 1/ 0 sec timer
// 1st two - synchronous logs - will come before any callback
// both the next two, will finish at the same time
// one after 0 secs, one immediately resolved
// timer finished kinda first as it's first in the code order
// However, it's callback goes in the callback queue
// whereas the Promise.resolve goes in the Microtasks Queue
// which takes precedence over the callback queue!!!

// We can extend the time the microtask takes using a loop
// Here we see that setTimeout of 0 does NOT take 0 secs!!!

// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test End');

// 259. Building A Simple Promise

// simulate a lottery - 50% chance of winning
// Note: the resolve, reject of the Promise
// We use .then to do something with the result

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery Draw is Happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN!!!!');
//     } else {
//       reject(new Error('You lost your money!!!!'));
//     }
//   }, 2000);
// });

// // consume the promise
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying = convert synchronous callback behaviour to async
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`I waited for 1 second`));

// // Generate resolved or rejected value straight away
// Promise.resolve('abc').then(x => console.log(x)); // abc
// Promise.reject(new Error('Problem!')).catch(x => console.error(x)); // Error: Problem!

// 260. Promisifying the Geolocation API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => console.log(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// // 262. Consuming Promises With ASYNC / AWAIT

// const whereAmI = async function (country) {
//   const res = await fetch(
//     `https://restcountries.com/v3.1/alpha?codes=${country}`
//   );
//   console.log(res.json());
// };

// whereAmI('IE');
// console.log('FIRST'); // This appears first as we await the API call in the background

// async/await works exactly like fetch/.then() -> syntactic sugar
// only about consuming promises

// 263. Error Handling with Async/Await

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

// 264. Returning Values From Async Functions
// 265. Running Promises In Parallel

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/alpha?codes=${c1}`),
//       getJSON(`https://restcountries.com/v3.1/alpha?codes=${c2}`),
//       getJSON(`https://restcountries.com/v3.1/alpha?codes=${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('IE', 'GB', 'FR'); // ['Dublin'], ['london], ['Paris']

// 266. Other Promise Combinators: Race, Allsettled and Any

// Promise.race
// Settled as soon as one of the promises gets settled - First one to settle wins the race!!

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/alpha?codes=IE`),
//     getJSON(`https://restcountries.com/v3.1/alpha?codes=FR`),
//     getJSON(`https://restcountries.com/v3.1/alpha?codes=GB`),
//   ]);
//   console.log(res[0]);
// })();

// // cl's the quickest country to load
// // we can use a setTimeout to race against a promise to control the amount of time we're willing to wait for the promise to resolve .. Used very often in commercial programming

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/alpha?codes=IE`),
//   timeout(0.3),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// // Never short circuits if one promise rejects

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Success, ERROR, Another success - even the rejected promise is "fulfilled"

// // Promise.any() - ES2021
// // Return the first fulfilled promise but rejected are ignored
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Success
