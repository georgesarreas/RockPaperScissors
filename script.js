

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
    displayWinner(winner,computerSelection);
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

function displayWinner(winner, computerSelection) {
    if (winner === 'player') {
      totalScore.player++;
      // show the corresponding result
      result.innerHTML = ` 
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerSelection} fa-10x"></i>
        <p>Computer Chose <strong>${computerSelection.charAt(0).toUpperCase() +
          computerSelection.slice(1)}</strong></p>
      `;
    } else if (winner === 'computer') {
      totalScore.computer++;
      // same as above
      result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerSelection} fa-10x"></i>
        <p>Computer Chose <strong>${computerSelection.charAt(0).toUpperCase() +
          computerSelection.slice(1)}</strong></p>
      `;
    } else {
      result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerSelection} fa-10x"></i>
        <p>Computer Chose <strong>${computerSelection.charAt(0).toUpperCase() +
          computerSelection.slice(1)}</strong></p>
      `;
    }
     // Show score
  score.innerHTML = `
  <p>Player: ${totalScore.player}</p>
  <p>Computer: ${totalScore.computer}</p>
  `;

modal.style.display = 'block';
}

// Restart game
function restartGame() {
totalScore.player = 0;
totalScore.computer = 0;
score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
`;
}

// Clear modal
function clearModal(e) {
if (e.target == modal) {
  modal.style.display = 'none';
}
}
//now for the event listener
choices.forEach(choice => choice.addEventListener('click', playRound));
window.addEventListener('click', clearModal);           //just to clear the pop up
restart.addEventListener('click', restartGame);