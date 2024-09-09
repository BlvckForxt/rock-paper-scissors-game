// Generate random computer's choice
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3); //Generate random integer from range [0, 1, 2]
    
    if (choice === 0) {
        return 'Rock';
    }
    else if (choice === 1) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

function getHumanChoice() {
    const possibleChoices = ['rock', 'paper', 'scissors'];

    let userChoice = prompt('Rock/paper/scissors? ');
    
    // check if user's choice is valid
    if ( possibleChoices.includes(userChoice.toLowerCase()) ) {
        // apply correct format - uppercase first letter and lowercase others
        return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    }
    else {
        return 'Invalid choice';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // single round
    function playRound(humanChoice, computerChoice) {
        // winning definitions
        if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            humanScore++;
            return `Well done! ${humanChoice} beats ${computerChoice}!\n\n` + 
            `Player: ${humanScore}  || Computer: ${computerScore}`;
        }
        // draw situation
        else if (humanChoice === computerChoice) {
            return `Draw!\n\n` +
            `Player: ${humanScore}  || Computer: ${computerScore}`;
        }
        else {
            computerScore++;
            return `Computer wins. ${computerChoice} beats ${humanChoice}.\n\n` +
            `Player: ${humanScore}  || Computer: ${computerScore}`;
        }
    }
    
    // win the game conditions - score enough points
    while (humanScore < 2 || computerScore < 2) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // show human and computer choices
        console.log(playRound(humanSelection, computerSelection));

        // choose winner
        if (humanScore === 2) {
            console.log('You win!');
            break;
        }
        else if (computerScore === 2) {
            console.log('Computer wins!');
            break;
        }
    }

}

playGame();