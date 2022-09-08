'use strict';

// console.log(document.querySelector('.message').textContent);
// // Start guessing...

// // Change text from 'Start Guessing' to 'Correct Number'
// document.querySelector('.message').textContent = 'Correct Number!';

// // Change .number and .score numbers
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // Get JS to pick a number by manipulating the input value
// document.querySelector('.guess').value = 23;

// listen on check button click
// log the number guessed
// change the .message text to say 'You picked {guessed number}'

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);

//   document.querySelector('.message').textContent = `You picked ${
//     document.querySelector('.guess').value
//   }`;
// });

// convert string input to number type
// add a message if no number is input
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = '🚫 No Number!';
//   }
// });

// 74 Implementing the Game Logic
/*
 Math.random gives you a random number between 0 and 1.
 So if you want between 1 and 20, we must first multiply it by 20.  This number will never be 20 so we add 1 to it!!  Math.trunc - returns the integer but not the decimal part (removes the fractional digits!)
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if no number in guess
  if (!guess) {
    displayMessage('🚫 No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;

    // CSS changes
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '🙌 Too high !!!' : '⬇️ Too low !!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🙌 Too high !!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when guess is to low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬇️ Too low !!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// refresh button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing ... ');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
