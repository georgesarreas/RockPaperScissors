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



