/*let js = "amazing";
if ((js = "amazing")) alert("Javascript is FUN!");

console.log(40 + 8 + 23 - 10);
*/

/*
let choices = [`rock`, `paper`, `scissors`];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return (computerChoice = choices[Math.floor(Math.random() * choices.length)]);
}

function getPlayerChoice() {
  return (playerChoice = prompt(
    `What is your choice: Rock, paper, or scissors?`
  ));
  return (playerChoice = playerChoice.toLowerCase());
}

function playRound(getPlayerChoice, computerChoice) {
  getPlayerChoice;
  if (playerChoice === computerChoice) {
    console.log(`It's a tie`);
  } else if (
    (playerChoice === `rock` && getComputerChoice === `scissors`) ||
    (playerChoice === `scissors` && getComputerChoice === `paper`) ||
    (playerChoice === `paper` && getComputerChoice === `rock`)
  ) {
    playerScore++;
    console.log(`You win this round!`);
  } else {
    console.log(`You lose this round.`);
    console.log(computerScore++);
  }
}

function game() {
  playRound(getPlayerChoice, getComputerChoice);

  playRound(getPlayerChoice, getComputerChoice);

  playRound(getPlayerChoice, getComputerChoice);

  playRound(getPlayerChoice, getComputerChoice);

  playRound(getPlayerChoice, getComputerChoice);
}

game();
console.log(playerScore);
console.log(computerScore);
*/

// NEW.....................//

let choices = [`rock`, `paper`, `scissors`];
let playerScore = 0;
let computerScore = 0;

// let playerChoice = prompt(
//   `What is your choice: Rock, Paper, or Scissors`
// ).toLowerCase();
// if (
//   playerChoice === `rock` ||
//   playerChoice === `paper` ||
//   playerChoice === `scissors`
// ) {
// } else {
//   alert(`Check your spelling. Refresh the page.`);
// }

function getPlayerChoice() {
  input = prompt(
    `What is your throw?`,
    `Rock, Paper, or Scissors`
  ).toLowerCase();
  if (input === `rock` || input === `paper` || input === `scissors`) {
    return input;
  } else {
    alert(`Check your spelling. Refresh the page`);
    return undefined;
  }
}
let playerChoice = getPlayerChoice();
console.log(`You chose ${playerChoice}`);

function getComputerChoice() {
  return (ComputerChoice = choices[Math.floor(Math.random() * choices.length)]);
}
let computerChoice = getComputerChoice();
console.log(`The computer chose ${computerChoice}`);

function checkWinner(A, B) {
  if (A === B) {
    console.log(`This round is a tie.`);
  } else if (
    (A === `rock` && B === `scissors`) ||
    (A === `scissors` && B === `paper`) ||
    (A === `paper` && B === `rock`)
  ) {
    playerScore++;
    console.log(`You win this round.`);
  } else {
    computerScore++;
    console.log(`You lose this round.`);
  }
  console.log(`Your score: ${playerScore}. Computer score: ${computerScore}.`);
}

let roundWinner = checkWinner(playerChoice, computerChoice);

function playRound(playerChoice, computerChoice) {
  playerChoice = getPlayerChoice();
  console.log(`You chose ${playerChoice}`);
  computerChoice = getComputerChoice();
  console.log(`The computer chose ${computerChoice}`);
  checkWinner(playerChoice, computerChoice);
}
playRound();
playRound();
playRound();
playRound();

function finalScore() {
  if (playerScore === computerScore) {
    console.log(`It's a tie.`);
  } else if (playerScore > computerScore) {
    console.log(`You beat the computer!`);
  } else if (playerScore < computerScore) {
    console.log(`The computer beat you.`);
  }
}

finalScore();
