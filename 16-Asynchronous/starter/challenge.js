'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   let language = Object.values(data.languages)[0];
//   let currency = Object.values(data.currencies)[0];

//   let html = `
//         <article class="country ${className}">
//             <img class="country__img" src="${data.flags.svg}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(2)} million</p>
//                 <p class="country__row"><span>🗣️</span>${language}</p>
//                 <p class="country__row"><span>💰</span>${currency.name} ( ${
//     currency.symbol
//   } )</p>
//             </div>
//         </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

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

// Coding Challenge #1

// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁

// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://nominatim.org/release-docs/develop/api/Reverse/
// The AJAX call will be done to a URL with this format:
// fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`).
// Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)

// The Complete JavaScript Course 31
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

// const whereAmI = function (lat, lon) {
//   let coords = [lat, lon];
//   fetch(
//     `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords[0]}&lon=${coords[1]}`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       console.log(
//         `You are in ${data.address.city}, ${data.address.country}. Country Code is ${data.address.country_code}`
//       );
//       const city = data.address?.city;
//       const country = data.address?.country;
//       const country_code = data.address?.country_code;
//       if (!city) throw new Error('No city found!');
//       if (!country) throw new Error('No country found!');
//       if (!country_code) throw new Error('No country code found!');
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha?codes=${country_code}`,
//         `Country not found`
//       ).then(data => {
//         renderCountry(data[0], 'countryMain');
//         const neighbour = data[0]?.borders;
//         if (!neighbour) throw new Error('No neighbour found!');
//       });
//     });
//   // .catch(err => {
//   //   console.error(`${err} 💥 💥 💥`);
//   //   renderError(`Something went wrong 💥 💥 ${err.message}. Try again!`);
//   // });
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// 261. Coding Challenge #2

// For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.  Load image 1, display for 2 secs and remove. Load image 2, display for 2 secs and then disappear!!!
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait' function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that 😉)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast

// wait function from previous lecture
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images'); // selects images class = image container

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img'); // makes img and saves it in img
//     img.src = imgPath; // uses path to get img

//     img.addEventListener('load', function () {
//       imgContainer.append(img); // add that image to the container once it loads
//       resolve(img); // positive outcome of promise
//     });

//     // deal with reject/negative outcome of promise
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found!')); // custom error if img doesn't load
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2); // return wait fn so can chain the next .then()
//   })
//   .then(() => {
//     // wait fn doesn't return any value, so ()
//     currentImg.style.display = 'none'; // remove the current image after 2 secs
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

// Coding Challenge #3

// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G” in the dev tools Network tab

// Solution (Part1)

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images'); // selects images class = image container

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img'); // makes img and saves it in img
//     img.src = imgPath; // uses path to get img

//     img.addEventListener('load', function () {
//       imgContainer.append(img); // add that image to the container once it loads
//       resolve(img); // positive outcome of promise
//     });

//     // deal with reject/negative outcome of promise
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found!')); // custom error if img doesn't load
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2); // return wait fn so can chain the next .then()
//   })
//   .then(() => {
//     // wait fn doesn't return any value, so ()
//     currentImg.style.display = 'none'; // remove the current image after 2 secs
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

// const loadNPause = async function () {
//   try {
//     // Load Image 1
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 Loaded');
//     await wait(2); // don't need to save to variable as has no value
//     img.style.display = 'none'; // in same scope, can use img - no need for global currentImg
//     await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadNPause();

// // PART 2
// // 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr'
// // 2. Use .map to loop over the array, to load all the images with the
// // 'createImage' function (call the resulting array 'imgs')
// // 3. Check out the 'imgs' array in the console! Is it like you expected?
// // 4. Use a promise combinator function to actually get the images from the array 😉
// // 5. Add the 'parallel' class to all the images (it has some CSS styles)
// // Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
// // 3.jpg']. To test, turn off the 'loadNPause' function

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async img => await createImage(img));
//     console.log(imgs); // returns the promises
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//     imgsEl.forEach(img => img.classList.add('parallel'));
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
