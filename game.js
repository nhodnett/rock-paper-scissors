class Game {
  constructor(human, computer) {
    this.player1 = human;
    this.player2 = computer;
    this.draw = false;
    this.winner = "";
    this.gameType = "";
    this.winConditions = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "alien"],
      scissors: ["paper", "lizard"],
      lizard: ["alien", "paper"],
      alien: ["scissors", "rock"],
    };
  }

checkWinConditions(human, computer) {
  this.winner = null;
  if (this.winConditions[human].includes(computer)) {
    this.winner = this.player1.name
    this.player1.wins += 1
    console.log('player1', this.player1.wins)
   }
  else if (this.winConditions[computer].includes(human)) {
    this.winner = this.player2.name
    this.player2.wins += 1
    console.log('player2', this.player2.wins)
  }
}

resetGame() {
  this.winner = ""
}
};
