# Rock, Paper, Scissors
## Project Overview
This was the final solo project in Mod 1 as part of the Turing Frontend Program. The goal was to create a traditional Rock, Paper, Scissors game, with the additional option of a "Hard" version in which the weapons of Lizard and Alien were added!

Instructions and Rubric for this project can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)

## Contributors
Nathan Hodnett:  https://github.com/nhodnett

## Instructions for running and viewing the project
The game can be accessed through the following steps:
<ul>
<li> Fork the project to your own Github account
<li> Clone the repository to your local machine
<li> cd into the project
<li> Type "open index.html" into your terminal to view the application in your browser, or open the project in your editor to view the code
</ul>

### Start Page View
Hovering over the Classic or Hard button areas in the center of the page changes the cursor and produces an opacity on those buttons to indicate that the user can select one of these options.

![Start Page](https://media.giphy.com/media/2EgfhRk4LBKADiRT7C/giphy.gif)
### Classic Game Play
When the Classic game option is clicked a traditional game opens with a choice of 3 weapons. The user selects their weapon by clicking on their choice. Confirmation is indicated by a small icon that shows underneath for a brief amount of time. The user and computer choice is shown side by side and the results pop up. The winner, (or a draw), is briefly displayed above the weapon icons before resetting to the 3 weapon choices again.

![Classic Game](https://media.giphy.com/media/SaD4EOB0V71bPWaxkY/giphy.gif)
### Hard Game Play
Same functionality as in the Classic game option, but with 2 additional weapons available, "Lizard", and "Alien". NOTE: In both game options the "Wins" count is displayed on the side of the screen, and persists until the page is refreshed.

![Hard Game](https://media.giphy.com/media/ilQT0tSfdFXRjguC4I/giphy.gif)
### Change Game
Once either the Classic game or the Hard game is selected, the user can change their mind, (and their selected game option), by clicking the "Change Game" button shown on the left hand side of the screen as they wish.

![Change Game](https://media.giphy.com/media/tc5oNaQPRV2MFbfE2L/giphy.gif)
## Future Additions
<ul>
<li> Extension: Ability to clear wins without having to refresh the page
<li> Ability for the user to change their emoji/token
<li> Create more interactive buttons and animated display
</ul>

## Technologies used
<ul>
<li> Javascript
<li> HTML
<li> CSS
<li> Atom
<li> git
<li> GitHub
</ul>

## Reflections - Challenges and Wins
I found this project quite daunting to begin with. I wasn't quite sure where to begin. Although the suggestion in the Rubric was to make the game fully playable without the DOM, i.e. to think Data Model first, I find lack of visual cues that something is working a major blocker. So with this in mind I concentrated on the HTML and CSS to begin with in order to give me the structure and styling frame of reference I needed, and then moved on to the Javascript Functionality.

I am still not 100% confident in my understanding of separating the Data Model and the DOM, so predictably I had to re-factor some code between main.js and Player.js, (takeTurn). Although this was a frustrating thing to have to do, I think that getting the game working and then recognizing that some of the functionality that was in main.js would be more appropriate in Player.js was a good learning experience for me.
