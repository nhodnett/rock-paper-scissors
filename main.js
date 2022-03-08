// QUERY SELECTORS
var classicViewButton = document.querySelector('.classic-game');
var hardViewButton = document.querySelector('.hard-game');
var changeGameButton = document.querySelector('.change-game-button');
var chooseGameButtons = document.querySelector('.choose-game-buttons');

var changeText = document.querySelector('.change-text');
var classicView = document.querySelector('.choose-weapon-classic-view');
var hardView = document.querySelector('.choose-weapon-hard-view');
var changeGameView = document.querySelector('.change-game');
var humanChoiceEmoji = document.querySelector('.emoji');
var resultsView = document.querySelector('.results-view');
var humanChoiceImage = document.querySelector('.human-choice-image');
var computerChoiceImage = document.querySelector('.computer-choice-image');
var humanWinsDisplay = document.querySelector('.player-1-win-count');
var computerWinsDisplay = document.querySelector('.player-2-win-count');

// EVENT LISTENERS
window.addEventListener('load', initiateGame);
chooseGameButtons.addEventListener('click', newGame);
changeGameButton.addEventListener('click', displayStartPage);
classicView.addEventListener('click', playGame);
hardView.addEventListener('click', playGame);

// GLOBAL VARIABLES
var currentGame;

// FUNCTIONS/EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function initiateGame() {
  human = new Player("human")
  computer = new Player("computer")
  currentGame = new Game(human, computer)
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
  classicView.innerHTML = ""
  classicView.innerHTML += `<button class="weapon-button">
    <img src="./Assets/happy-rocks.png" alt="Rock" class="image" id="rock">
  </button>
  <button class="weapon-button">
    <img src="./Assets/lines-paper.png" alt="Paper" class="image" id="paper">
  </button>
  <button class="weapon-button">
    <img src="./Assets/lines-scissors.png" alt="Scissors" class="image" id="scissors">
  </button>`
};

function displayHardView() {
  show(hardView)
  hide(classicView)
  show(changeGameView)
  hide(chooseGameButtons)
  changeText.innerText = "Choose Weapon!";
  hardView.innerHTML = ""
  hardView.innerHTML += `<button class="weapon-button">
    <img src="./Assets/happy-rocks.png" alt="Rock" class="image" id="rock">
  </button>
  <button class="weapon-button">
    <img src="./Assets/lines-paper.png" alt="Paper" class="image" id="paper">
  </button>
  <button class="weapon-button">
    <img src="./Assets/lines-scissors.png" alt="Scissors" class="image" id="scissors">
  </button>
  <button class="weapon-button">
    <img src="./Assets/flat-lizard.png" alt="Lizard" class="image" id="lizard">
  </button>
  <button class="weapon-button">
    <img src="./Assets/flat-alien.png" alt="Alien" class="image" id="alien">
  </button>`
};

function displayStartPage(event) {
  event.preventDefault()
  show(chooseGameButtons)
  hide(changeGameView)
  hide(classicView)
  hide(hardView)
  hide(resultsView)
  changeText.innerText = "Choose your game!";
};

function displayResultsView() {
  show(resultsView)
  hide(classicView)
  hide(hardView)
}

function displayHumanChoiceEmoji(event) {
  event.preventDefault()
    var humanSelection = event.target.closest(".weapon-button")
    humanSelection.innerHTML += `<p class="emoji" id="classicRockChoice"> 🤳 </p>`
};

function playGame(event) {
  event.preventDefault()
    displayHumanChoiceEmoji(event)
    human.takeTurn()
    computer.takeTurn()

  currentGame.checkWinConditions(human.choice, computer.choice)

  setTimeout(function () {
  renderResults(human.choice, computer.choice)}, 1000)
  setTimeout(nextRound, 3000)
};

function renderResults(humanChoice, computerChoice) {
  displayHumanChoice(humanChoice)
  displayComputerChoice(computerChoice)
  displayWinner()
  displayScore()
};

function displayHumanChoice(humanChoice) {
  humanChoiceImage.innerHTML = "";
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
};

function nextRound() {
  currentGame.resetGame()
  if (currentGame.winner === "" && currentGame.gameType === 'classic') {
    displayClassicView()
  }
  else if (currentGame.winner === "" && currentGame.gameType === 'hard') {
    displayHardView()
  }
    hide(resultsView)
};
