// Importing module
// import { addToCart } from './shoppingCart.js';
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

console.log('Importing module');

// const shopCart = addToCart('apples', 200);
// console.log(shopCart); // 200 apples added to cart

// addToCart('bread', 5); // 5 bread added to cart

// console.log(price, totalQuantity); // 237 23

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5); // 5 bread added to cart
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity); // 237 23

import add, { cart } from './shoppingCart.js';
add('pizza', 2); // 2 pizza added to cart
add('bread', 5);
add('apples', 4);

console.log(cart);

// use new API at https://jsonplaceholder.typicode.com/
// this is blocking !!! So use with caution

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data); // 100 mock posts to the console
// console.log('Something else!!'); // this only returns after the fetch is finished

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost(); // returns the promise pending not the data
// console.log(lastPost);

// // fix - Not very clean - we can use top-level await instead of the async fn for this!!!
// lastPost.then(last => console.log(last)); // {title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}

// // using top-level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// 274. The Module Pattern

// IIFE - only called once - don't call it separately

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//     orderStock, // this was not originally included, but fn is now available after returning it
//   };
// })();

// ShoppingCart2.addToCart('apples', 4);
// ShoppingCart2.addToCart('pizzas', 2);
// ShoppingCart2.orderStock('pizzas', 2); // Uncaught TypeError: ShoppingCart2.orderStock is  ot a function
// // This is because the function is not returned and therefore not available outside the scope of the fn
// // Note: we can't access ShoppingCart2 in the console to take a look at it as it's not available outside the module!!
// console.log(ShoppingCart2); // {cart: Array(3), totalPrice: 237, totalQuantity: 23, addToCart: ƒ, orderStock: ƒ}

// How does this work?? Closures - allow a function to have access to all the vars that were available at it's birthplace
// Note: this pattern works very well and has done for quite a while but native ES6 modules were added mainly to allow bundlers to do their work.  Also, if we wanted one module per file (as per ES6), we'd have to create multiple links to the index.js file and be careful of the order with all the vars living in the global scope.

// 275. CommonJS Modules

// Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// };

// // Import
// const {addToCart} = require('.shoppingCart.js');

// This will not work in the browser BUT it would work in NodeJS!!!!

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone); // user: {loggedIn: false}
console.log(stateDeepClone); // user: {loggedIn: true}

if (module.hot) {
  module.hot.accept();
}
