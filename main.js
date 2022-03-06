// A main.js file that contains all DOM related JavaScript
// Remember that the game logic exists exclusively in the data model.
// The DOM simply reflects/displays that data model.

// QUERY SELECTORS
// Buttons:
var classicViewButton = document.querySelector('.classic-game');
var hardViewButton = document.querySelector('.hard-game');
var changeGameButton = document.querySelector('.change-game-button');
var chooseGameButtons = document.querySelector('.choose-game-buttons');
// Views:
var changeText = document.querySelector('.change-text');
var classicView = document.querySelector('.choose-weapon-classic-view');
var hardView = document.querySelector('.choose-weapon-hard-view');
var changeGameView = document.querySelector('.change-game');
//Newly added:
var resultsView = document.querySelector('.results-view');
var humanChoiceImage = document.querySelector('.human-choice-image');
var computerChoiceImage = document.querySelector('.computer-choice-image');
var humanWinsDisplay = document.querySelector('.player-1-win-count');
var computerWinsDisplay = document.querySelector('.player-2-win-count');
// Do I need Weapon buttons? Emojis/pngs?

// EVENT LISTENERS
window.addEventListener('load', initiateGame);
chooseGameButtons.addEventListener('click', newGame);
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
function initiateGame() {
  // event.preventDefault()
  human = new Player("human")
  computer = new Player("computer")
  currentGame = new Game(human, computer)

  //  if (event.target.className === 'classic-game' || event.target.className === 'classic-title' || event.target.className === 'classic-list') {
  //    currentGame.gameType = 'classic'
  //    displayClassicView()
  //  }
  //  else if (event.target.className === 'hard-game' || event.target.className === 'hard-title' || event.target.className === 'hard-list') {
  //    currentGame.gameType = 'hard'
  //    displayHardView()
  // }
  };

function newGame(event) {
  event.preventDefault()
  if (event.target.className === 'classic-game' || event.target.className === 'classic-title' || event.target.className === 'classic-list') {
    currentGame.gameType = 'classic'
    displayClassicView()
  }
  else if (event.target.className === 'hard-game' || event.target.className === 'hard-title' || event.target.className === 'hard-list') {
    currentGame.gameType = 'hard'
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

function displayStartPage(event) {
  event.preventDefault()
show(chooseGameButtons)
hide(changeGameView)
hide(classicView)
hide(hardView)
hide(resultsView) //wont need...
changeText.innerText = "Choose your game!";
};

//
function displayResultsView() {
show(resultsView)
hide(classicView)
hide(hardView)
}

// 2. Random Choice generator for computer
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

// 3. Play game Function...
function playGame(event) {
  event.preventDefault()

  var humanChoice = event.target.id
  var computerChoice = chooseComputerWeapon()

  currentGame.checkWinConditions(humanChoice, computerChoice)
  //  console.log('who won?', currentGame)
  //  console.log('who won?', currentGame.checkWinConditions)

   // displayResultsView()
   displayHumanChoice(humanChoice)
   displayComputerChoice(computerChoice)
   displayWinner()
   displayScore()
};

// 4. Display human choice and computer choice side by side when image is clicked...
function displayHumanChoice(humanChoice) {
  humanChoiceImage.innerHTML = "";
  //playGame()
    displayResultsView();
  if (humanChoice === "rock") {
    humanChoiceImage.innerHTML += `<img src="./Assets/happy-rocks.png" alt="Rock" class="image" id="rock">`
}
  else if (humanChoice === "paper") {
    humanChoiceImage.innerHTML += `<img src="./Assets/lines-paper.png" alt="Paper" class="image" id="paper">`
}
  else if (humanChoice === "scissors") {
    humanChoiceImage.innerHTML += `<img src="./Assets/lines-scissors.png" alt="Scissors" class="image" id="scissors">`
}
  else if (humanChoice === "lizard") {
    humanChoiceImage.innerHTML += `<img src="./Assets/flat-lizard.png" alt="Lizard" class="image" id="lizard">`
}
  else if (humanChoice === "alien") {
      humanChoiceImage.innerHTML += `<img src="./Assets/flat-alien.png" alt="Alien" class="image" id="alien">`
}
};

function displayComputerChoice(computerChoice) {
  computerChoiceImage.innerHTML = "";
  //playGame()
    displayResultsView();
  if (computerChoice === "rock") {
    computerChoiceImage.innerHTML += `<img src="./Assets/happy-rocks.png" alt="Rock" class="image" id="rock">`
}
  else if (computerChoice === "paper") {
    computerChoiceImage.innerHTML += `<img src="./Assets/lines-paper.png" alt="Paper" class="image" id="paper">`
}
  else if (computerChoice === "scissors") {
    computerChoiceImage.innerHTML += `<img src="./Assets/lines-scissors.png" alt="Scissors" class="image" id="scissors">`
}
  else if (computerChoice === "lizard") {
    computerChoiceImage.innerHTML += `<img src="./Assets/flat-lizard.png" alt="Lizard" class="image" id="lizard">`
}
  else if (computerChoice === "alien") {
      computerChoiceImage.innerHTML += `<img src="./Assets/flat-alien.png" alt="Alien" class="image" id="alien">`
}
};

//5. Display Winner - innerText...
function displayWinner() {
  if(currentGame.winner === "human") {
    changeText.innerText = "Player 1 Wins!"
  }
  else if (currentGame.winner === "computer") {
    changeText.innerText = "Player 2 Wins!"
  }
  else {
    changeText.innerText = "It's a Draw!"
}
};

function displayScore() {
humanWinsDisplay.innerText = `Wins: ${currentGame.player1.wins}`
computerWinsDisplay.innerText = `Wins: ${currentGame.player2.wins}`
}

// 7. Show Game Results
// function showResults() {
//   show/hide???
//   displayHumanChoice() - when selection is made
//   displayComputerChoice() - when random function runs
//   displayWinner() - when the above are selected
//   displayScore() - in the aside sections when there is a winner or loser
// }

// 8. function for resetGame()?
// function resetGame() {
//
// }
