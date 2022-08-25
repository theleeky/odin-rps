// random selection of rps for computer
function getComputerChoice() {
    const rps = ["Rock", "Scissors", "Paper"]
    return rps[Math.floor(Math.random() * 3)];
}

// plays a round of rock paper and scissors after player selects rps
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

// waiting for click event from user on any button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'reset') {
            
        } else {
            
            // play a round of rps

        }
    });
});
