// A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// Constructor - properties should include: name (ex: 'Human'),
// token (ex: ':woman::skin-tone-2:'), wins (ex: 0)
// takeTurn

class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token; // emoji...
    this.wins = 0;
    this.choice = ""; // buttons... Am I doing anything with this?
    // extension - reset wins...
  }
};

//What is the Token for?

//takeTurn() {
// call it in main.js
// conditional - if player name === human, get their click input, (event.target)
// if this.name === computer, (getRamdomIndex)
  // 2 arrays - 1 for classic, 1 for hard, (for computer)
//}

// resetWins()...
