var attempts = document.querySelector(".attemptNumber");
var clearButton = document.querySelector(".clear-button");
var counter = 2;
var genNumber = Math.floor(Math.random() * 101);
var guessButton = document.querySelector(".guess-button");
var hint = document.querySelector("#userFeedback");
var lastGuess = document.querySelector(".last-guess-text");
var multiButts = document.querySelector(".enableMultiplayerButton");
var playerTurn = document.querySelector(".player-number");
var resetGame = document.querySelector(".resetButton");
var userGuess = document.querySelector(".guessInput");

clearButton.addEventListener("click", clearUserInput);

multiButts.addEventListener("click", function() {
  toggleMultiplayer();
});

resetGame.addEventListener("click", function() {
  location.reload();
});

guessButton.addEventListener("click", function(event) {
  displayUserGuess();
  event.preventDefault();
  togglePlayerOne();
  if (counter <= 6) {
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

function displayUserGuess() {
  var number = userGuess.value;
  var parsedNumber = parseInt(number);
  document.getElementById("user-Guess").innerHTML = guessInput.value;

  if (parsedNumber === genNumber) {
    lastGuess.innerText = "🔥BOOM!🔥";
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
    lastGuess.innerText = "😡😡Hey, I said between 0-100😡😡";
    document.querySelector(".userGuessDisplay").innerText = "???";
  }
}

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

function toggleMultiplayer() {
  console.log("butts");
  var element = document.getElementById("players");
  element.classList.toggle("multiplayers");
}

function togglePlayerOne() {
  var element = document.getElementById("player1");
  element.classList.toggle("inactivePlayerButton");
  var element = document.getElementById("player2");
  element.classList.toggle("activePlayerButton");
}

console.log(genNumber);
