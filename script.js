let parts = ["rock", "paper", "scissors"]

function getComputerChoice () {
    return parts[Math.floor(Math.random() * parts.length)];
}

console.log(getComputerChoice());
