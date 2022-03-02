// A game.js file that contains a Game class.

class Game {
  constructor() {
    this.player1 = new player;
    this.player2 = new Player;
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Wins = [];
    this.player2Wins = [];
    this.draw = false;
    this.winner = false;
  }
};

// Do I need turns? i.e. player1Turn = true, player2Turn = false???
// If so, do I need nextPlayer() method?

// whichPlayerWon()?

// winConditions()?

// checkForDraw()?

// resetGame()?

// A Game should include:
// Two Player instances - Human & Computer? GV in main.js
// A way to keep track of the data for the game board
// A way to keep track of the selected game type - classic vs messed up?
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
