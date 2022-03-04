// A main.js file that contains all DOM related JavaScript
// Remember that the game logic exists exclusively in the data model.
// The DOM simply reflects/displays that data model.

// QUERY SELECTORS
// Buttons:
var classicViewButton = document.querySelector('.classic-game');
var hardViewButton = document.querySelector('.hard-game');
var changeGameButton = document.querySelector('.change-game-button');
// Views:
var chooseGameButtons = document.querySelector('.choose-game-buttons');
var changeText = document.querySelector('.change-text');
var classicView = document.querySelector('.choose-weapon-classic-view');
var hardView = document.querySelector('.choose-weapon-hard-view');
var changeGameView = document.querySelector('.change-game');
//var startPage = document.querySelector('.game-board');
// Weapon button



// EVENT LISTENERS
// initiateGame - when classic or hard is chosen
// classicViewButton.addEventListener('click', initiateGame);
chooseGameButtons.addEventListener('click', initiateGame);
changeGameButton.addEventListener('click', displayStartPage);
classicView.addEventListener('click', playGame);
hardView.addEventListener('click', playGame);
// playGame - takeTurn?

// GLOBAL VARIABLES
var currentGame; // = new Game(); //declared, can be re-assigned

// FUNCTIONS/EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// HELPER FUNCTIONS - SHOW/HIDE...
function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

// 1. Initiate Game!

function initiateGame(event) {
  event.preventDefault()
  human = new Player("human")
  computer = new Player("computer")
  currentGame = new Game(human, computer)
//console.log(initiateGame)
   if (event.target.className === 'classic-game' || event.target.className === 'classic-title' || event.target.className === 'classic-list') {
     currentGame.gameType = "classic"
     displayClassicView()
   }
   else if (event.target.className === 'hard-game' || event.target.className === 'hard-title' || event.target.className === 'hard-list') {
     currentGame.gameType = "hard"
     displayHardView()
  }
  };

function displayClassicView() {
  show(classicView)
  hide(hardView)
  show(changeGameView)
  hide(chooseGameButtons)
  changeText.innerText = "Choose Weapon!";
  //hide(startPage)
};

function displayHardView() {
  show(hardView)
  hide(classicView)
  show(changeGameView)
  hide(chooseGameButtons)
  changeText.innerText = "Choose Weapon!";
  //hide(startPage)
};

function displayStartPage() {
show(chooseGameButtons)
hide(changeGameView)
hide(classicView)
hide(hardView)
changeText.innerText = "Choose your game!";
};

// Start Game Function? 4 things... Instantiate current game = new game, in game class passing two args human & Computer
// which button was clicked..? classic or hard.
// if classic clicked, call classic game function
// if hard clicked, call hard game function
  // Is this where to switch between classic and hard game?
  // event listener - game choice view..?

// function for classic game?
  // add & remove hidden class

// function for hard game?
  // add & remove hidden class

// 2. Play Game...

function chooseComputerWeapon() {
  console.log(currentGame.gameType)
  var classicWeapons = ["rock", "paper", "scissors"]
  var hardWeapons = ["rock", "paper", "scissors", "lizard", "alien"]

  if (currentGame.gameType === "classic") {
      return classicWeapons[getRandomIndex(classicWeapons)];
  }
  else if (currentGame.gameType === "hard") {
      return hardWeapons[getRandomIndex(hardWeapons)];
  }
};

function playGame(event) {
  event.preventDefault()
  console.log(event.target.id)
  if (event.target.id === chooseWeaponClassicView) {
    return
  }
  else if (event.target.id === chooseWeaponHardView) {
    return
  }
  //var humanChoice = event.target.closest(id)???
  var computerChoice = chooseComputerWeapon()
  console.log('hi', computerChoice)

  currentGame.checkWinConditions(human, computer)
  console.log('hi again', currentGame)
};
  // Players take turn
  // Check for win & check for draw at the same time..?
  // Call display Winner..?
  // Reset Game..?

// 3. Display Winner...

// 4. function for resetGame()?
