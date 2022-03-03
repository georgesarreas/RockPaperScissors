/*const options = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return options[Math.floor(Math.random()*3)];
}

let playerScore = 0;
let compScore = 0;

function playRound(){

    const computerSelection = computerPlay();
    const playerSelection = prompt("rock, paper or scissors?").toLowerCase();

    if (computerSelection === 'rock' ){
        if (playerSelection === 'rock'){
            alert("TIE!");
        }else if (playerSelection === 'paper'){
            playerScore++;
            alert("YOU WIN! Paper beats rock");
        }else if (playerSelection === 'scissors'){
            compScore++;
            alert ("YOU LOSE! Rock beats Scissors");
        }

    } else if (computerSelection === 'paper'){
        if (playerSelection === 'rock'){
            compScore++;
            alert ("YOU LOSE! Paper beats rock");
        }else if (playerSelection === 'paper'){
            alert ("TIE!");
        }else if ( playerSelection === 'scissors' ) {
            playerScore++;
            alert ("YOU WIN! Scissors beats Paper");
        }

    }else if (computerSelection === 'scissors'){
        if (playerSelection === 'rock') {
            playerScore++;
            alert ("YOU WIN! Rock beats Scissors");
        }else if (playerSelection === 'paper'){
            compScore++;
            alert ("YOU LOSE! Scissors beats Paper");
        }else if (playerSelection === 'scissors'){
            alert ("TIE!");
        }
    }
}


function game() {
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if  (compScore > playerScore){
        alert("YOU LOOSE! \nplease refresh the page to play again");
    } else if (playerScore > compScore){
        alert('Congratulations! You win! At life!\nplease refresh the page to play again');
    }else {
        alert('Are you even trying?\nplease refresh the page to play again');
    }
    
}
console.log(game());
*/ 



/* here on down is the code for the ui rock-paper-scissors*/

const choices = document.querySelectorAll(".choices");
const score  = document.getElementById('score');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const result = document.getElementById('result');
const totalScore = {
    player: 0,
    computer: 0
};


//function that plays the round
function playRound(e) {
    restart.style.display = 'inline-block';
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const winner= determineWinner(playerSelection,computerSelection);
    console.log(playerSelection,computerSelection,winner);
};

//the computer's choice function
const options = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return options[Math.floor(Math.random()*3)];
}

//determine winner
function determineWinner(playerSelection,computerSelection) {
    if (computerSelection === 'rock' ){
        if (playerSelection === 'rock'){
            return 'draw'
        }else if (playerSelection === 'paper'){
            
            return 'player'
        }else if (playerSelection === 'scissors'){
            
            return 'computer';
        }

    } else if (computerSelection === 'paper'){
        if (playerSelection === 'rock'){
            
            return 'computer';
        }else if (playerSelection === 'paper'){
            return 'draw';
        }else if ( playerSelection === 'scissors' ) {
            
            return 'player';
        }

    }else if (computerSelection === 'scissors'){
        if (playerSelection === 'rock') {
            
            return 'player';
        }else if (playerSelection === 'paper'){
            
            return 'computer';
        }else if (playerSelection === 'scissors'){
            return ' draw';
        }
    }
}
//now for the event listener
choices.forEach(choice => choice.addEventListener('click', playRound));