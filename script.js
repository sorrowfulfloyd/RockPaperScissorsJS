function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    let move = possibleChoices[Math.floor(Math.random() * possibleChoices.length)].toLowerCase();
    console.log("SECRET: computers move is: " + move)
    return move;
};

function playRound(computer, player) {
    if (player == "rock" || player == "paper" || player == "scissors") {
        if (computer == "rock" && player == "paper") { return "PbRp" }
        else if (computer == "rock" && player == "scissors") { return "RbSc" }

        else if (computer == "paper" && player == "scissors") { return "SbPp" }
        else if (computer == "paper" && player == "rock") { return "PbRc" }

        else if (computer == "scissors" && player == "rock") { return "RbSp" }
        else if (computer == "scissors" && player == "paper") { return "SbPc" }

        // Tie
        else if (computer == "paper" && player == "paper") { return "PtPt" }
        else if (computer == "rock" && player == "rock") { return "RtRt" }
        else if (computer == "scissors" && player == "scissors") { return "StSt" }
    }

    else { return console.log("unknown entry: " + player) }
};

function legitMove() {
    MOVECHECKER: do {
        let move = prompt("Your move, pick one! (ROCK or PAPER or SCISSORS)", "paper").toLowerCase()
        if (move == "rock" || move == "paper" || move == "scissors") {
            console.log("Got your move! It was: " + move);
            return move;
        } else {
            alert("Unknown entry, remember you can only play: rock, paper, or scissors!")
            continue MOVECHECKER;
        }
    } while (true)
}

function game() {
    let result = [], comp = 0, plyr = 0, currentMove = "";
    GAMELOOP: do {
        if (comp == 3) { console.log("Computer won! Here are the results: " + result); break; }
        else if (plyr == 3) { console.log("YOU won! Here are the results: " + result); break; }
        else {
            currentMove = playRound(getComputerChoice(), legitMove()).slice(-1);
            if (currentMove !== "t") {
                result += currentMove;
                if (currentMove == "c") { comp++; console.log("Computer won this round!") }
                else if (currentMove == "p") { plyr++; console.log("Player won this round!") }
            } else {
                console.log("You're tied with the computer, try again!");
                continue GAMELOOP;
            }
        }
    } while (true);
};

game();