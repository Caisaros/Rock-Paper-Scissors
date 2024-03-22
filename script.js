// this is for the computer to always return equally randomly between the 3 options
let parts = ["Rock", "Paper", "Scissors"];

// for getting a random choice between the three options for the computer
function getComputerChoice () {
    return parts[Math.floor(Math.random() * parts.length)];
}

// variables for tracking the score
let player1 = 0;
let computer = 0;

let endGame = false;

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
    if (endGame == false) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computer++;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        player1++;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computer++;
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        player1++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        player1++;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computer++;
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else return "Let's play again!";
}
};

// console.log(game());

let btns = document.querySelector("#buttons");

btns.addEventListener("click", (event) => {
    if (endGame == false) {

    let msg = document.querySelector("#message");

    let score = document.querySelector("#score");
    
    // let theButtons = document.querySelector("#theButtons");
    // theButtons.appendChild(btns);
    let restart = document.createElement("button");

    let playerSelection = "";
    const computerSelection = getComputerChoice();

    let target = event.target;

    switch(target.id) {
        case "btn1" : playerSelection = "Rock";
        msg.textContent = `You choose: "Rock" - Computer choose: "${computerSelection}"`;
        break;
        case "btn2" : playerSelection = "Paper";
        msg.textContent = `You choose: "Paper" - Computer choose: "${computerSelection}"`;
        break;
        case "btn3" : playerSelection = "Scissors";
        msg.textContent = `You choose: "Scissors" - Computer choose: "${computerSelection}"`;
        break;
    }

    score.textContent = `"${playRound(playerSelection, computerSelection)}" - Your score is: "${player1}" - Computer's score is "${computer}"`;
    
    if (endGame === false) {
    if (player1 === 5) {
         score.textContent = "Congratulations! You win!";
         endGame = true;
         btns.appendChild(restart);
         restart.textContent = "Restart";
         restart.addEventListener ("click", () => restartGame());
    } else if (computer === 5) {
         score.textContent = "Defeat, You lose!";
         endGame = true;
         btns.appendChild(restart);
         restart.textContent = "Restart";
         restart.addEventListener ("click", () => restartGame());
    }
    };

    function restartGame() {
        player1 = 0;
        computer = 0;
        endGame = false;
        btns.removeChild(restart);
    }
    // console.log(playRound(playerSelection, computerSelection));
    // console.log(getComputerChoice());
}
});