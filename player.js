class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice = "";
  }

takeTurn() {
  var classicWeapons = ["rock", "paper", "scissors"]
  var hardWeapons = ["rock", "paper", "scissors", "lizard", "alien"]

  if (this.name === "human") {
    this.choice = event.target.id
  };
  if (this.name === "computer" && currentGame.gameType === "classic") {
    this.choice = classicWeapons[getRandomIndex(classicWeapons)]
  }
  else if (this.name === "computer" && currentGame.gameType === "hard") {
    this.choice = hardWeapons[getRandomIndex(hardWeapons)]
  }
}
};
