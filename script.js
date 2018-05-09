var clearButton = document.querySelector(".clear-button");
var genNumber = Math.floor(Math.random() * 101);
var guessButton = document.querySelector(".guess-button");
var hint = document.querySelector("#userFeedback");
var lastGuess = document.querySelector(".last-guess-text");
var resetGame = document.querySelector(".resetButton");
var userGuess = document.querySelector(".guessInput");
var attempts = document.querySelector(".attemptNumber")

clearButton.addEventListener("click", clearUserInput);
guessButton.addEventListener("click", displayUserGuess);
resetGame.addEventListener("click", function() {
  location.reload();
});

guessButton.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("userGuess").innerHTML = guessInput.value;
});

userGuess.addEventListener("input", function() {
  enableButtons();
});

function clearUserInput() {
  event.preventDefault();
  guessInput.value = "";
  disableButtons();
}
function disableButtons() {
  guessButton.disabled = true;
  clearButton.disabled = true;
  resetGame.disabled = true;
}

function enableButtons() {
  guessButton.disabled = false;
  clearButton.disabled = false;
  resetGame.disabled = false;
}

function displayUserGuess() {
  var number = userGuess.value;
  var parsedNumber = parseInt(number);
  if (parsedNumber === genNumber) {
    lastGuess.innerText = "BOOM!";
    hint.innerText = "Gj Fam you did it";
  }
  if (parsedNumber > genNumber) {
    lastGuess.innerText = "Your guess was";
    hint.innerText = "That's too high";
  }
  if (parsedNumber < genNumber) {
    lastGuess.innerText = "Your guess was";
    hint.innerText = "That's too low";
  }
}

// //WIP, get user attempts to display on screen 1 - 3
// for (var i = 0; i < 3; i++){
//   attempts.innerText[i]
// };

console.log(genNumber);

//make a min and max for range in the input field HTML or in JS (multiple ways of doing it)//omne way of doing it gives you an automatic alert if you go outside the range and the other doesnt
