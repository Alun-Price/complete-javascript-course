'use strict';

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
