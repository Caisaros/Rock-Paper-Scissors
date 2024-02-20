// this is for the computer to always return equally randomly between the 3 options
let parts = ["rock", "paper", "scissors"];

// for getting a random choice between the three options for the computer
function getComputerChoice () {
    return parts[Math.floor(Math.random() * parts.length)];
}

// variables for tracking the score
let player1 = 0;
let computer = 0;

//best of 5 games played function
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let player = prompt("pick between rock, paper or scissors", getComputerChoice());
//         const playerSelection = player;
//         const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//     }
//     if (player1 > computer) {
//         return "You won!";
//     } else if (computer > player1) {
//         return "You lost!";
//     } else return "It's a tie!";

// };

//plays out the game between each options from both players
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computer++;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        player1++;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computer++;
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        player1++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        player1++;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computer++;
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else return "Please imput the correct option, this counts as a loss.";
};

console.log(game());
