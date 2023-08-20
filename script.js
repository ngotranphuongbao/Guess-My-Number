"use strict";
//Assign Variables
const numberEl = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");

//Number generating Functinality
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Check Functionality
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess >= 1 && guess <= 20) {
    if (score > 1) {
      if (guess !== number) {
        message.textContent = guess > number ? "📈 Too high!" : "📉 Too low!";
        score--;
      } else {
        message.textContent = "🎉 Correct Number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        numberEl.textContent = number;
        numberEl.style.width = "30rem";
        if (score > highscore) {
          highscore = score;
          highscoreEl.textContent = highscore;
        }
      }
      scoreEl.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreEl.textContent = 0;
    }
  } else {
    message.textContent = "Please enter a number from 1 to 20.";
  }
});

//Reset Game Functionality
againBtn.addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  message.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  numberEl.textContent = "?";
  numberEl.style.width = "15rem";
});
