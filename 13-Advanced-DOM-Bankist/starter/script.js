'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// SCROLLING
btnScrollTo.addEventListener('click', function (e) {
  const s1chords = section1.getBoundingClientRect();
  // console.log(s1chords); // DOMRect {x: 0, y: 969, width: 1263, height: 1439.890625, top: 969, …}

  // console.log(e.target.getBoundingClientRect()); // DOMRect {x: 56.5, y: 539.5859375, width: 112.4609375, height: 28.5, top: 539.5859375, …}

  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset); // changes when I scroll down // Current scroll (X/Y) 0 353.5

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  //);

  //Scrolling [Old]
  // window.scrollTo({
  //   left: s1chords.left + window.pageXOffset,
  //   top: s1chords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Scrolling [New]
  section1.scrollIntoView({ behavior: 'smooth' }); // only works in modern browsers
});

/////////////////////////////////
// PAGE NAVIGATION

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // stops scrolling to section on click [html - anchor links]
//     const id = this.getAttribute('href'); // #section1 - anchor tag when click on Feature
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// This solution creates a listener for each nav element - this could effect performance if we have alot of nav elements and is technically not the cleanest solution! Instead we use the propagation effects to arrive at a cleaner solution.

// 2 Steps
// Add eventlistener to a common parent element - here it's the nav__links = nav link container
// Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); // prevent using html anchor links
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // #section1 - anchor tag when click on Feature
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//  add click and open to both Open Account buttons
// btnsOpenModal.forEach(btn => addEventListener('click', openModal));

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

////////////////////////////////////
////////////////////////////////////

// console.log(document.documentElement); // selects the whole <html></html> code
// console.log(document.head); // selects the <head></head> code
// console.log(document.body); // selects the <body></body> code

const header = document.querySelector('.header'); // returns first element that returns the selector (i.e. header)
const allSections = document.querySelectorAll('.section'); // returns ALL elements for that selector
//console.log(allSections); // returns a NodeList

document.getElementById('section--1'); // no need for #
const allButtons = document.getElementsByTagName('button');
//console.log(allButtons); // returns HTMLCollection of all the buttons
// HTMLCollection = is live updated ; delete an element - collection is updated, BUT nodeLists are NOT!!!

//console.log(document.getElementsByClassName('btn')); // returns HTMLCollection

// Creating and Inserting Elements
//.insertAdjacentHTML - very useful - see Bankist app for its use!!!

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // // message.textContent =
// // //   'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message); // adds the message to the header // prepend = adds ele as first child of header
// // // header.append(message); // adds the message to the header // append = adds ele as last child of header
// // // Note: we'll only see the message once - DOM element is unique - so append overwrites the prepend!!
// // // What if we want it to appear in BOTH places??

// // header.append(message.cloneNode(true)); // use this cloned copy instead!!! - now appears in both places!!!

// // header.before(message); // adds message before as a sibling
// header.after(message); // adds message after as a sibling

// // // Delete Elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // // Note: remove() is quite recent - you'll see it done like this in older code - DOM traversal
// // document
// //   .querySelector('.btn--close-cookie')
// //   .addEventListener('click', function () {
// //     message.parentElement.removeChild(message);
// //   });

// // 187. Styles, Attributes and Classes
// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// message.style.padding = '20px';

// console.log(message.style.backgroundColor); // we defined backgroundColor - so shown - rgb(55, 56, 61)
// console.log(message.style.color); // defined in stylesheet but nothing shown here
// // getComputedStyle
// console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
// console.log(getComputedStyle(message).height); // 89px

// // want to add 40px to height
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // without parseFloat would be a string
// console.log(getComputedStyle(message).height); // 119px

// // :root = document

// document.documentElement.style.setProperty('--color-primary', 'orangered'); // changes the primary color to orangered

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); // Bankist logo
// console.log(logo.src); // http://127.0.0.1:8080/img/logo.png
// console.log(logo.className); // nav__logo

// // Non-standard
// // we have an attribute of "designer" on the logo but it would not be shown as it's not a defined attb for img
// // we can use getAttribute to find this type of info
// console.log(logo.getAttribute('designer')); // Jonas
// // we can set the Attribute too using setAttribute
// logo.setAttribute('company', 'Bankist'); // <img src="img/logo.png" alt="Bankist logo" class="nav__logo" id="logo" designer="Jonas" company="Bankist">

// // use getAttribute to get the relative src (rather than absolute)
// console.log(logo.src); // http://127.0.0.1:8080/img/logo.png
// console.log(logo.getAttribute('src')); // img/logo.png

// // similarly for links
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // http://127.0.0.1:8080/#
// console.log(link.getAttribute('href')); // #

// // Data Attribute - special attb that start with data-
// console.log(logo.dataset.versionNumber); // should be 3.0 - I get undefined

// // Classes
// logo.classList.add('c', 'j'); // can add multiples
// logo.classList.remove('j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes as in arrays

// DONT USE THIS!!!!
//logo.clasName = 'jonas'; // just adds one class and removes all the existing ones - DON'T USE!!!!

// 188. Implementing Smooth Scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1chords = section1.getBoundingClientRect();
// console.log(s1chords); // DOMRect {x: 0, y: 969, width: 1263, height: 1439.890625, top: 969, …}

// console.log(e.target.getBoundingClientRect()); // DOMRect {x: 56.5, y: 539.5859375, width: 112.4609375, height: 28.5, top: 539.5859375, …}

// console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset); // changes when I scroll down // Current scroll (X/Y) 0 353.5

// console.log(
//   'height/width viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
//);

//Scrolling [Old]
// window.scrollTo({
//   left: s1chords.left + window.pageXOffset,
//   top: s1chords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

// Scrolling [New]
//   section1.scrollIntoView({ behavior: 'smooth' }); // only works in modern browsers
// });

// // 189. Types of Events and Event Handlers

// // Events happen whether we're listening or not!!!
// // see MDN Mouse Events for list of events we can listen for
// // Mouseenter Event - like hover in css
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading!!!');

//   // remove the eventListener
//   //h1.removeEventListener('mouseenter', alertH1); // now event only happens once then is removed
// };

// // another way - old skool - use the eventListener way
// // h1.onmouseenter = function (e) {
// //   alert('Old school - yeah');
// // };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // remove eventlistener after 3 secs

//	190. Event Propagation: Bubbling and Capturing
//  191. Event Propagation In Practice

// random color generator

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// // attach eventlistener to feature in nav
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK : ', e.target, e.currentTarget);

//   //stop propagation
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER : ', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV : ', e.target, e.currentTarget);
// });

// so clicking on Feature - the base eventListener - allows the other eventlisteners on the parent elements to be triggered too
// clicking outside feature but on the nav__links we get the event change in it and the parent elements but not on the feature element!!!

// this === e.currentTarget

// e.stopPropagation - can stop bubbling up to parent elenments!!!
// adding true to the end of the addEventListener - allows it to capture event on way down from capture

// 192.  Event Delegation : Implementing Page Navigation
// click a nav link - will auto-scroll to the correct section

// 193. DOM Traversing
// const h1 = document.querySelector('h1');

// // going downwars : child
// console.log(h1.querySelectorAll('.highlight')); // NodeList(2) [span.highlight, span.highlight]
// console.log(h1.childNodes); // NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
// console.log(h1.children); // direct children - live update -HTMLCollection(3) [span.highlight, br, span.highlight]
// h1.firstElementChild.style.color = 'white'; // changes just "banking" to white color
// h1.lastElementChild.style.color = 'orangered'; // changes "minimalist" to orangered

// // going upwards : parents
// console.log(h1.parentNode); // <div class="header__title">…</div>grid
// console.log(h1.parentElement); // <div class="header__title">…</div>grid

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // changes the whole header background to yellow gradient
// h1.closest('h1').style.background = 'var(--gradient-primary)'; // changes h1 background to green

// // Going sideways : siblings
// // can only select the next or previous sibling
// console.log(h1.previousElementSibling); // null
// console.log(h1.nextElementSibling); // <h4>A simpler banking experience for a simpler life.</h4>
// console.log(h1.previousSibling); // #text
// console.log(h1.previousSibling); // #text

// // Trick: go to parent and select siblings from there
// console.log(h1.parentElement.children); // gets all siblings including itself // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
// // for fun, lets change something to all the siblings except the element itself

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)'; // makes all the other elements 50% smaller
// });

// 194. Building a Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// EVENT HANDLERS
// event delegation
// want to select the tab, not the node or the button depending where we click
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // ignore click where click on the wrong area (outside button but in container) - guard clause
  if (!clicked) return;

  // active tab - remove the class for all tabs before adding it to the clicked one
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // clear all the content areas
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// 195. Passing Arguments Into Event Handler Functions

// Want all the other nav components to fade out when we select one - Menu Fade Animation
// mouseenter does not bubble, so we'll use mouseover!!!

//const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this; // change opacity to this in alternate version below
    });
    logo.style.opacity = this; // change opacity to this in alternate version below
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// Alternate way using bind - Note: addEvenListener needs a callback function
// Passing an "argument" into handler

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1.0));

// 196. Implementing a Sticky Navigation : The Scroll Event

// Basically adds a .nav.sticky class once we scroll down to a particular point on the page

// .nav.sticky {position: fixed, background-color: rgba(255, 255, 255, 0.9)} slightly transparent effect too!!

// Sticky Navigation - Version1 (using scroll - inefficient as fires for every scroll)

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY); // as we scroll, we see where we are

//   // can see the position where we want the nav to become sticky
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// 197.  A Better Way : The Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// // obsCallback gets called when root (all viewport crosses 10% = threshold 0.10)
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // must be px
});

headerObserver.observe(header);

// 198.  Revealing Elements On Scroll

// slide in the sections
// add a class as we approach the sections
// first add section--hidden class to all four sections in htmlv- use JS as some turn off JS and wouldn't see anything
// sections other than the first one should disappear now
// reveal sections as we approach them now

//const allSections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: `-90px`,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden'); // remove section from view
});

// 199. Lazy Loading Images

// We have two images - one small, low rez one that's also blurred and the digital high-rez one
//  As we approach the section we, we can replace the low-rez one with the high-rez one = Lazy Loading
// In the html, we have src = img/digital-lazy.jpg and data-src = img/digital.jpg
// class = features__img lazy-img
// lazy-img {filter: blur(20px);}
// Great for performance

const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entries);
  if (!entry.isIntersecting) return;

  // Replace the src attb with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// 200. Building A Slider Component : Part 1

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // makes slides easy to see when working with them
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.2)';
  // slider.style.overflow = 'visible';

  //  FUNCTIONS

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // got to slide fn
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // -100%, 0%, 100%

  // Previous Slide

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots(); // create the dots on the page
    activateDot(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Functionality: when you press the arrow key (left/right), the slider moves in that direction
  // Note: the cl shows you what the code is for those keydown events!!!
  document.addEventListener('keydown', function (e) {
    //console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  // Next: add the dot functionality
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset; // click dot brings you to that slide

      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

//  201.  Building A Slider Component : Part 2

// build in functionality so when you press the arrow right or left keys, the slider moves accordingly
// create the dots and show the active one and make it change as the slider does
// clicking on a dot allows the slider to move
// wrap all the slider functionality into one function (slider()) - not to pollute the global scope with slider vars

// 202. Lifecycle DOM Events

// DOMContentLoaded - HTML parsed and DOM tree built
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and DOM tree built', e);
// }); // can only execute code after the DOM is written
// // as long as we have the js script tag at the end of the html script, we don't have to listen for the DOMContentLoaded event and wrap our code in it!!!

// // Equivalent in jQuery is document.ready

// // LOAD - page fully loaded with html, css and images
// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });

// // BEFOREUNLOAD - as user is leaving the page - don't abuse this
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

// 203. Efficient Script Loading : Defer and Async
