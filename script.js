var clearButton = document.querySelector('.clear-button');
var genNumber = Math.floor(Math.random() * 101);
var guessButton = document.querySelector('.guess-button');
var hint = document.querySelector('#userFeedback');
var lastGuess = document.querySelector('.last-guess-text');
var resetGame = document.querySelector('.resetButton');
var userGuess = document.querySelector('.guessInput');


clearButton.addEventListener('click', clearUserInput);
guessButton.addEventListener('click', displayUserGuess);

resetGame.addEventListener('click', function() {
location.reload();
})

function clearUserInput() {
  event.preventDefault();
  guessInput.value = "";
}

function changeButtonStatus(btn){
  guessButton.disabled = true;
}

function displayUserGuess() {
  var number = userGuess.value;
  var parsedNumber = parseInt(number);
  if (parsedNumber === genNumber) 
  { lastGuess.innerText = 'BOOM!'; hint.innerText = 'Gj Fam you did it' };
  if (parsedNumber > genNumber) 
  { lastGuess.innerText = 'Your guess was'; hint.innerText = 'That\'s too high' };
  if (parsedNumber < genNumber) 
  { lastGuess.innerText = 'Your guess was'; hint.innerText = 'That\'s too low' };
  if (parsedNumber < 1 || parsedNumber > 100)
  { lastGuess.innerText = 'Please input a number'; hint.innerText = 'Between 1 and 100'
  }
}

guessButton.addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('userGuess').innerHTML = guessInput.value;
});

userGuess.addEventListener('keyup', function(){
  console.log('change');

});

console.log(genNumber);

//make a min and max for range in the input field HTML or in JS (multiple ways of doing it)//omne way of doing it gives you an automatic alert if you go outside the range and the other doesnt

// make a function that disables buttons if theres nothing on input or hardcode it into the button itself, add an event listener that when you click on the input field annd checks to see if there's a;