var attempts = document.querySelector(".attemptNumber");
var clearButton = document.querySelector(".clear-button");
var counter = 2;
var genNumber = Math.floor(Math.random() * 101);
var guessButton = document.querySelector(".guess-button");
var hint = document.querySelector("#userFeedback");
var lastGuess = document.querySelector(".last-guess-text");
var playerTurn = document.querySelector(".player-number")
var resetGame = document.querySelector(".resetButton");
var userGuess = document.querySelector(".guessInput");

clearButton.addEventListener("click", clearUserInput);
resetGame.addEventListener("click", function() {
  location.reload();
});

guessButton.addEventListener("click", function(event) {
  displayUserGuess();
  event.preventDefault();
  if (counter <= 3) {
    document.querySelector(".attemptNumber").innerText = counter;
    counter++;
  } else {
    alert("\t \t \t 😬Game Over. Smash that reset button.😬");
    document.querySelector(".userGuessDisplay").innerText = "???";
  }
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
  document.getElementById("userGuess").innerHTML = guessInput.value;

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
  if (parsedNumber > 100 || parsedNumber < 0) {
    lastGuess.innerText = "Hey, I said between 0-100";
    document.querySelector(".userGuessDisplay").innerText = "???";
  }
}

console.log(genNumber);

// add anon function that runs both