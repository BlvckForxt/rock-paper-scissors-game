function getComputerChoice() {
    choice = Math.floor(Math.random() * 3); //Generate random integer in a range [0-3] 
    
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
    const possible_choices = ['rock', 'paper', 'scissors'];

    let user_choice = prompt('Rock/paper/scissors? ');
    
    if ( possible_choices.includes(user_choice.toLowerCase()) ) {
        return user_choice.charAt(0).toUpperCase() + user_choice.slice(1).toLowerCase();
    }
    else {
        return 'Invalid choice';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            humanScore++;
            return `Well done! ${humanChoice} beats ${computerChoice}!\n\n` + 
            `Player: ${humanScore}  || Computer: ${computerScore}`;
        }
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
    
    while (humanScore < 2 || computerScore < 2) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
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