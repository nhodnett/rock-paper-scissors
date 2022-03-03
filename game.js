// A game.js file that contains a Game class.

class Game {
  constructor(human, computer) {
    this.player1 = human; // new Player
    this.player2 = computer; // new Player
    this.draw = false;
    this.winner = "" // human or computer... then reset...
    this.gameType = "classic" || "hard"; // classic vs hard...  Helps determine win conditions... How/where do we switch? In main.js!
  }
};

// Do I need turns? i.e. player1Turn = true, player2Turn = false???
// If so, do I need nextPlayer() method?

// whichPlayerWon()?

// winConditions(player1, player2)?
  // conditional? if player1.choice === "rock" && player2.choice === "scissors"
  // etc, etc... for player 1 wins, then else if for player 2 wins?
  //

// checkDraw(player1, player2) {
//   if (player1.choice === player2.choice) {
//     this.draw = true;
//     this.winner = "";
//   }
//   else {
//     this.draw = false;
//   }
// };
// conditional? if p1 === p2 draw = true? .choice...
// else draw = false?

// resetGame()?
// hmm...


// A Game should include:
// Two Player instances - Human & Computer? GV in main.js
// A way to keep track of the data for the game board
// A way to keep track of the selected game type - classic vs messed up?
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
