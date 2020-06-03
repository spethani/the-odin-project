const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const divInfo = document.querySelector('.info');
const playerParagraph = document.createElement('p');
const computerParagraph = document.createElement('p');
const winnerParagraph = document.createElement('p');
const scoreParagraph = document.createElement('p');
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', function (e) {
    playRound("rock", computerPlay());
});
paperBtn.addEventListener('click', function (e) {
    playRound("paper", computerPlay());
});
scissorsBtn.addEventListener('click', function (e) {
    playRound("scissors", computerPlay());
});

function computerPlay() {
    let numChoice = Math.ceil(Math.random()*3);
    let strChoice;
    if (numChoice == 1) {
        console.log("Computer chose rock.");
        strChoice = "Rock";
    }
    else if (numChoice == 2) {
        console.log("Computer chose paper.");
        strChoice = "Paper";
    }
    else {
        console.log("Computer chose scissors.");
        strChoice = "Scissors";
    }
    return strChoice;
}

function playRound(playerSelection, computerSelection) {
    let winner;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        winner = "Nobody";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "Player";
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "Player";
        playerScore++;
    }
    else {
        winner = "Computer";
        computerScore++;
    }
    playerParagraph.textContent = "Player played "+playerSelection+".";
    divInfo.appendChild(playerParagraph);
    computerParagraph.textContent = "Computer played "+computerSelection+".";
    divInfo.appendChild(computerParagraph);
    winnerParagraph.textContent = winner + " wins.";
    divInfo.appendChild(winnerParagraph);
    scoreParagraph.textContent = "Score: "+playerScore+" - "+computerScore;
    divInfo.appendChild(scoreParagraph);
    return winner;
}

function game() {
    console.log("Playing best out of 5.");
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        let playerChoice = window.prompt("Choose Rock, Paper, or Scissors.");
        console.log("Player chose "+playerChoice+".");
        let winner = playRound(playerChoice, computerPlay());
        console.log(winner+" won the round.");
        if (winner = "Player") {
            playerScore++;
        }
        else if (winner = "Computer") {
            computerScore++;
        }
        console.log("Score: "+playerScore+"-"+computerScore);
    }
    if (playerScore > computerScore) {
        console.log("CONGRATS. PLAYER WINS.");
    }
    else {
        console.log("SORRY. COMPUTER WINS.");
    }
}
