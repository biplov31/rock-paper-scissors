// functions that randomly returns rock, paper, or scissors which is going to be our computers play
const computerPlay = () => { 
  let choices = ['rock', 'paper', 'scissors'];
  let choice = choices[Math.floor(Math.random()*choices.length)]; // outputs 0, 1, or 2 and the element of the respective index is logged on the console i.e. choices[0] == rock.
  console.log(`Computer picked ${choice}`);
  return choice;
}  
// computerPlay();

// function that plays a single round of the game and returns the result 
let playerScore = 0;
let computerScore = 0;
const gameRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log("It's a draw."); 
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("Scissors beats paper. You lose.");
    computerScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("Rock beats scissors. You lose.");
    computerScore += 1;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("Paper beats rock. You lose."); 
    computerScore += 1; 
  } else {
    console.log("You win!");
    playerScore += 1;
  }

}

// gameRound("rock", computerPlay());

// function that has a loop to repeat function calls, displays the results of each round and the winner at the end

// let playerSelection = prompt("please state your choice").toLowerCase();
let playerSelection = () => {
  let userPlay = prompt("Please state your choice.").toLowerCase();
  return userPlay;
};  
// let computerSelection = computerPlay();
let computerSelection = () => {  //// we have to call computerPlay everytime we want a new random value, if we only refer to computerSelection it'll have the same value everytime. So we call the function with computerPlay as parameter  
  return computerPlay();
};
gameRound(playerSelection(), computerSelection());  
gameRound(playerSelection(), computerSelection());
gameRound(playerSelection(), computerSelection());
gameRound(playerSelection(), computerSelection());
gameRound(playerSelection(), computerSelection());


// const game = () => {
//   for (i = 0; i <= 5; i++) {
//     round(playerSelection, computerSelection);
  //   if (result = "You win"){
  //     score += Number(1);
  //   }
//   }
// }
// game();

// final result
if (playerScore > computerScore){
  console.log(`You are the winner. Your score is ${playerScore}/5 and the computers score is ${computerScore}/5.`); 
} else if (playerScore == computerScore) {
  console.log(`It's a draw. Your score is ${playerScore}/5 and the computers score is ${computerScore}/5.`);
} else {
  console.log(`You have lost. Your score is ${playerScore}/5 and the computers score is ${computerScore}/5.`);
}
