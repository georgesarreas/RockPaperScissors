const options = ['rock', 'paper', 'scissors'];
const computerSelection = computerPlay();


function computerPlay(){
    return options[Math.floor(Math.random()*3)];
}


function playRound(computerSelection, playerSelection){
    if (computerSelection === 'rock' ){
        if (playerSelection === 'rock'){
            return "TIE!"
        }else if (playerSelection === 'paper'){
            return "YOU WIN! Paper beats rock"
        }else if (playerSelection === 'scissors'){
            return "YOU LOSE! Rock beats Scissors"
        }

    } else if (computerSelection === 'paper'){
        if (playerSelection === 'rock'){
            return "YOU LOSE! Paper beats rock"
        }else if (playerSelection === 'paper'){
            return "TIE!"
        }else if (playerSelection === 'scissors'){
            return "YOU WIN! Scissors beats Paper"
        }

    }else if (computerSelection === 'scissors'){
        if (playerSelection === 'rock'){
            return "YOU WIN! Rock beats Scissors"
        }else if (playerSelection === 'paper'){
            return "YOU LOSE! Scissors beats Paper"
        }else if (playerSelection === 'scissors'){
            return "TIE!"
        }
    }
}


const playerSelection = prompt("rock, paper or scissors?").toLowerCase();
console.log(playRound(computerSelection,playerSelection));

