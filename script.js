const options = [
   "rock",
   "paper",
   "scissors"
]

const index = Math.floor(Math.random() * options.length);

const computerSelection = getComputerChoice();

let round;
let yourPoints = 0;
let opponentPoints = 0;

function getComputerChoice() {
   return options[index];
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      return "Tie game!";
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      youGainPoint();
      return ":) Rock beats scissors. You get 1 point!";
   } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerGainPoint();
      return ":( Paper covers rock. Your opponent gets 1 point.";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      youGainPoint();
      return ":) Paper covers rock. You get 1 point!";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerGainPoint();
      return ":( Scissors cut paper. Your opponent gets 1 point.";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerGainPoint();
      return ":( Paper smashes scissors. Your opponent gets 1 point.";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      youGainPoint();
      return ":) Scissors cut paper. You get 1 point!";
   }
}

function game() {

   let userInput = prompt("Take your pick! \n Rock, Paper, or Scissors.");

   console.log("Your selection: " + userInput)
   console.log("Computer selection: " + getComputerChoice())

   playRound(userInput, computerSelection);

   return scoreBoard();

}


for (round = 0; round < 5; round++) {
   console.log(game())
}



function youGainPoint() {
   ++yourPoints;
}

function computerGainPoint() {
   ++opponentPoints;
}


function scoreBoard() {
   // If 5 rounds have been played
   if (yourPoints > opponentPoints && round >= 4) {
      return "You won!   You: " + yourPoints + "     Computer: " + opponentPoints
   } else if (yourPoints < opponentPoints && round >= 4) {
      return "You lost.   You: " + yourPoints + "     Computer: " + opponentPoints
   } else if (yourPoints === opponentPoints && round >= 4) {
      return "No winners or losers this time.   You: " + yourPoints + "     Computer: " + opponentPoints
   }
   // If not yet 5 rounds
   else if (yourPoints > opponentPoints) {
      return "You're in the lead!   You: " + yourPoints + "     Computer: " + opponentPoints
   } else if (yourPoints < opponentPoints) {
      return "You're behind!   You: " + yourPoints + "     Computer: " + opponentPoints
   } else if (yourPoints === opponentPoints) {
      return "Tie game!   You: " + yourPoints + "     Computer: " + opponentPoints
   }
}