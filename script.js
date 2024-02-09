const choices = ["rock", "paper", "scissors"]; 

const playerChoice = prompt ("Choose rock, paper, Scissors"); 
if (playerChoice === "" || playerChoice === null) {
    console.log("You cheated!");
} else {
   console.log(`You choose ${playerChoice}`); 
};

const randomNumber = Math.floor(Math.random() * choices.length); 
const computerChoices = choices[randomNumber];
console.log(`Computer Chooses ${computerChoices}`); 


let playerScore = 0;
let computerScore = 0;

if (playerChoice === computerChoices) {
    console.log("It's a draw.");
} else if (playerChoice === "rock") {
      if (computerChoices === "scissors") {
        console.log("You Win.");
        playerScore++;
      } else {
        console.log("You lose!");
        computerScore++;
      }
} else if (playerChoice === "paper") {
      if (computerChoices === "rock") {
        console.log("You Win.");
        playerScore++;
      } else {
        console.log("You lose!");
        computerScore++;
      }
} else {
      if (computerChoices === "paper") {
        console.log("You Win.");
        playerScore++;
      } else {
        console.log("You lose!");
        computerScore++;
      }
};

console.log(`Your score: ${playerScore}`);
console.log(`Computer's score: ${computerScore}`)