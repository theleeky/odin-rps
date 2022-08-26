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

// main function where the game will be played
function main() {
    
   

    // keeping a track of the score
    let player = 0;
    let comp = 0;
    const playerScore = document.querySelector('#playerScore');
    const compScore = document.querySelector('#compScore');
    playerScore.textContent = player;
    compScore.textContent = comp;

    // create element for which will be updated each time a button is pressed
    const div = document.createElement('div');
    div.style.cssText = "align-self: center;"

    
    // waiting for click event from user on any button
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id === 'reset') {
                // restart game
                location.reload();
                return false;
            } else if (player < 5 && comp < 5) {
                // play a round of rps
                let computerSelection = getComputerChoice();
                switch (playRound(button.id, computerSelection)) {
                    case 0: // computer wins
                        comp += 1;
                        compScore.textContent = comp;
                        div.textContent = "The computer won this round."
                        break;
                    case 1: // player wins
                        player += 1;
                        playerScore.textContent = player;
                        div.textContent = "You won this round!"
                        break;
                    case 2: // draw
                        div.textContent = "This round was a draw"
                        break;
                } 
                // append announcement into document
                const box = document.querySelector('.box');
                box.insertBefore(div, document.querySelector('#reset'))
                
                //check if there is a winner
                if (player === 5) {
                    div.textContent = "You won!!"
                } else if (comp === 5) {
                    div.textContent = "You lost."
                }
            }
        });
    });
};

main()
