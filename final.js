// const computerPlay = () => { 
//   let choices = ['rock', 'paper', 'scissors'];
//   let choice = choices[Math.floor(Math.random()*choices.length)]; // outputs 0, 1, or 2 and the element of the respective index is logged on the console i.e. choices[0] == rock.
//   // alert(`Computer picked ${choice}`);
//   return choice;
// }  

// function computerSelection(){
//   return computerPlay;
// }

function computerPlay(){
  let choices = ['rock', 'paper', 'scissors'];
  let computerChoice = choices[Math.floor(Math.random()*choices.length)]; // outputs 0, 1, or 2 and the element of the respective index is logged on the console i.e. choices[0] == rock.
  // alert(`Computer picked ${choice}`);
  return computerChoice;
  // let computerPick = document.getElementById("computerPick");
  // computerPick.innerHTML = `Computer Picked: ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}`;
  
}

// function showComputerChoice (){
//   const computerChoice = computerPlay();
//   let computerPick = document.getElementById("computerPick");
//   computerPick.innerHTML = `Computer Picked: ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}`;
// }

let playerScore = 0;
let computerScore = 0;


function showScore(){
  let score = document.getElementById("score");
  score.innerHTML = `
  <p>Player's Score: ${playerScore}</p>
  <p>Computer's Score: ${computerScore}</p>`;
}

let computerPick = document.getElementById("computerPick");

let resultInfo = document.querySelector(".resultInfo");
const info = document.createElement('p');
info.classList.add('info');
resultInfo.appendChild(info);

function addAnimation(btnToBeAnimated){  // this function adds animation to the selected button by adding a css class called "pickedOption" to it and then removes other options that are not slected in that moment. We cannot access 'playerSelection' in the global scope so but we can call this function inside the other functions and give "playerSelection" as the parameter 
  if(btnToBeAnimated == 'rock'){
    rock.classList.add('pickedOption');
    paper.classList.remove('pickedOption');
    scissors.classList.remove('pickedOption');
  } else if (btnToBeAnimated == 'paper'){
    paper.classList.add('pickedOption');
    rock.classList.remove('pickedOption');
    scissors.classList.remove('pickedOption');
  } else{
    scissors.classList.add('pickedOption');
    paper.classList.remove('pickedOption');
    rock.classList.remove('pickedOption');
  }
}

const rock = document.getElementById('rock');
rock.addEventListener('click', playRock);
function playRock(){
  const playerSelection = 'rock';
  // rock.classList.add('pickedOption');  // adds animation from class 'pickedOption' to the selected option and removes from the other 
  // paper.classList.remove('pickedOption');
  // scisors.classList.remove('pickedOption');
  addAnimation('rock');
  
  const computerSelection = computerPlay();
  // let computerPick = document.getElementById("computerPick");
  computerPick.innerHTML = `Computer Picked ${(computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)).bold()}.`;  // Displays computer's pick in capitalised bold form
  
  if (computerSelection == "paper") {
    // alert("Paper beats rock. You lose.");
    resultInfo.textContent = "Paper beats rock.  You lose."
    computerScore += 1;
  } else if (computerSelection == "scissors") {
    // alert("Rock beats scissors. You win.");
    resultInfo.textContent = "Rock beats scissors. You win."
    playerScore += 1;
  } else {
    // alert("It's a tie.");
    resultInfo.textContent = "It's a tie."
  }  
  showScore();
  endResult();
  // finalResult(playerScore, computerScore);
}

const paper = document.getElementById('paper');
paper.addEventListener('click', playPaper);
function playPaper(){
  const playerSelection = 'paper';
  addAnimation('paper');

  const computerSelection = computerPlay();
  computerPick.innerHTML = `Computer Picked ${(computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)).bold()}.`; 

  if (computerSelection == "scissors") {
    resultInfo.textContent = "Scissors beats paper. You lose.";
    computerScore += 1;
  } else if (computerSelection == "rock") {
    resultInfo.textContent = "Paper beats rock. You win.";
    playerScore += 1;
  } else {
    resultInfo.textContent = "It's a tie.";
  } 
  showScore(); 
  endResult();
  // finalResult(playerScore, computerScore);
}

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', playScissors);
function playScissors(){
  const playerSelection = 'scissors';
  addAnimation('scissors');

  const computerSelection = computerPlay();
  computerPick.innerHTML = `Computer Picked ${(computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)).bold()}.`;  // Displays computer's pick in capitalised form

  if (computerSelection == "rock") {
    resultInfo.textContent = "Rock beats scissors. You lose.";
    computerScore += 1;
  } else if (computerSelection == "paper") {
    resultInfo.textContent = "Scissors beats paper. You win.";
    playerScore += 1;
  } else {
    resultInfo.textContent = "It's a tie.";
  }  
  showScore();
  endResult();
  // finalResult(playerScore, computerScore);
}

let resultModal = document.querySelector('.resultModal');
let modalContent = document.querySelector('.modalContent')
// let close = document.querySelector('.close');
// close.addEventListener('click', function(){resultModal.style.display = "none";})
window.addEventListener('click', function(e){
  console.log(e);
  if (e.target == resultModal){
    resultModal.style.display = "none";
    restartGame();
  }
})

// const overlayContent = finalResult.createElement('div');
// finalResult.appendChild(overlayContent);
//   if (finalScorePlayer == 5) {
//     finalResult.classList.add('finalResultOverlay');
//     // const overlayContent = finalResult.createElement('h1');
//     overlayContent.textContent = "Congratulations! You are the winner!";
//     // finalResult.appendChild(overlayContent);
//   } else if (finalScoreComputer == 5) {
//     finalResult.classList.add('finalResultOverlay');
//     // const overlayContent = finalResult.createElement('h1');
//     overlayContent.textContent = "Computer kicked your ass!";
//     // finalResult.appendChild(overlayContent);
//   } else {
//     finalResult.classList.add('finalResultOverlay');
//     // const overlayContent = finalResult.createElement('h1');
//     overlayContent.textContent = "It's a draw";
//     // finalResult.appendChild(overlayContent);
//   }

const container = document.getElementById('container');

function endResult(){
  if (playerScore == 3 || computerScore == 3){
    if (playerScore == 3){
      // finalResult.classList.add('resultModal'); 
      resultModal.style.display = 'block';
      modalContent.innerHTML = "<p>Congratulations! You are the winner!</p>";
    } else {
      // finalResult.classList.add('resultModal');
      resultModal.style.display = 'block';
      modalContent.innerHTML = "<p>You lost to a bot!</p>";  
    }
    container.classList.add('dimBackground');  // adds class called dimBackground to the main div with container class which makes the background less visible when the modal pops up 
    finalResult.appendChild(modalContent);
    // resultModal.style.display = 'block';
  }  
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  score.innerHTML = `
    <p>Player's Score: 0</p>
    <p>Computer's Score: 0</p>
  `;
  container.classList.remove('dimBackground');
}