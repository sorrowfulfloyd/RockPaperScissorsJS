const compMove = document.getElementById("compMove")
const beats = document.getElementById("beats")
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")

let comp = 0, plyr = 0;

function getComputerChoice() {
    const possibleChoices = ["rock", "paper", "scissors"];
    let move = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    compMove.textContent = "Computer played: " + move;
    return move;
};

function playRound(player) {
    let computer = getComputerChoice();
    if (computer == "rock" && player == "paper") { beats.textContent = player + ' beats ' + computer; return 1; }
    else if (computer == "rock" && player == "scissors") { beats.textContent = computer + ' beats ' + player; return 2 }

    else if (computer == "paper" && player == "scissors") { beats.textContent = player + ' beats ' + computer; return 1 }
    else if (computer == "paper" && player == "rock") { beats.textContent = computer + ' beats ' + player; return 2 }

    else if (computer == "scissors" && player == "rock") { beats.textContent = player + ' beats ' + computer; return 1 }
    else if (computer == "scissors" && player == "paper") { beats.textContent = computer + ' beats ' + player; return 2 }

    else if (computer == "paper" && player == "paper") { beats.textContent = player + ' ties ' + computer; return 0 }
    else if (computer == "rock" && player == "rock") { beats.textContent = player + ' ties ' + computer; return 0 }
    else if (computer == "scissors" && player == "scissors") { beats.textContent = player + ' ties ' + computer; return 0 }
};

function game(move) {

    let currentScore = playRound(move);
    if (currentScore == 1) { plyr++; console.log("player: " + plyr) }
    if (currentScore == 2) { comp++; console.log("computer: " + comp) }

    playerScore.textContent = plyr;
    computerScore.textContent = comp;

    if (plyr == 5) { beats.textContent = "YOU WON, IT'S OVER!!"; resetScores() }
    if (comp == 5) { beats.textContent = "YOU LOST, TRY AGANE"; resetScores() }
};

function resetScores() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    plyr = 0;
    comp = 0;
}