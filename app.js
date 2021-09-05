/*function computerPlay randomly returns either Rock, Paper or Scissors*/
const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

/* function playRound which plays a single round of Rock Paper Scissors */
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt().toLowerCase();
    if (computerSelection == playerSelection) {
        return "Tie game!";
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper"  && playerSelection == "rock")
    ) {
        computerScore = ++computerScore;
        /*keepCompScore();*/
        if (computerScore === 1) {
            return "You Lose! " + computerSelection + " beats " + playerSelection
            ;
        }
    } else {
        playerScore = ++playerScore;
        /*keepPlayerScore();*/
        if (playerScore === 1) {
            return "You Won! " + playerSelection + " beats " + computerSelection;
        }
    }
}

function game(playerSelection, computerSelection) {
    let comp = 0;
    let player = 0;
    playRound(playerSelection, computerSelection);
    if (computerScore === 1) {
        comp = comp + computerScore;
    } else {
        player = player + playerScore;
    }
    
    roundOne = "Round 1 Score: Computer: " + comp + ", Player: " + player + " ";
    playRound(playerSelection, computerSelection);
    if (computerScore === 1) {
        comp = comp + computerScore;
    } else {
        player = player + playerScore;
    }
    roundTwo = "Round 2 Score: Computer: " + comp + ", Player: " + player + " ";
    playRound(playerSelection, computerSelection);
    if (computerScore === 1) {
        comp = comp + computerScore;
    } else {
        player = player + playerScore;
    }
    roundThree = "Round 3 Score: Computer: " + comp + ", Player: " + player + " ";
    playRound(playerSelection, computerSelection);
    if (computerScore === 1) {
        comp = comp + computerScore;
    } else {
        player = player + playerScore;
    }
    roundFour = "Round 4 Score: Computer: " + comp + ", Player: " + player + " ";
    playRound(playerSelection, computerSelection);
    if (computerScore === 1) {
        comp = comp + computerScore;

    } else {
        player = player + playerScore;
    }
    roundFive = "Round 5 Score: Computer: " + comp + ", Player: " + player;
    if (playerScore > computerScore) {
        return roundOne + roundTwo + roundThree + roundFour + roundFive + " You Win!"
    } else {
        return roundOne + roundTwo + roundThree + roundFour + roundFive + " Lose"
    }
}



let playerSelection;
let computerSelection;
let roundOne;
let roundTwo;
let roundThree;
let roundFour;
let roundFive;
console.log(game(playerSelection, computerSelection));