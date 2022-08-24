function getComputerChoice() {
    const rps = ["Rock", "Scissors", "Paper"]
    return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const player = String(playerSelection).toLowerCase();
    const comp = String(computerSelection).toLowerCase();

    if (player === comp) {
        return 2;
    } else if (player == "rock" && comp == "scissors") {
        return 1;
    } else if (player == "paper" && comp == "rock") {
        return 1;
    } else if (player == "scissors" && comp == "paper") {
        return 1;
    } else {
        return 0;
    }
}

function game() {

    let playerCount = 0;
    let compCount = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors? ");
        let computerSelection = getComputerChoice();

        const round = playRound(playerSelection, computerSelection)
        if (round == 1){
            console.log("You won round " + (i+1))
            playerCount++;
        } else if (round == 0) {
            console.log("Computer won round " + (i+1))
            compCount++;
        } else {
            console.log("Round " + (i+1) + " was a draw")
        }
    }

    if (playerCount > compCount) {
        console.log("You won the game of Rock Paper Scissors.")
    } else if (compCount > playerCount) {
        console.log("The computer won the game unfortunately.")
    } else {
        console.log("The game was a tie")
    }
}

game()