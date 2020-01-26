let playerScore = 0;
let computerScore = 0;
let playerSelection, choice, result, win, score, 
choicePlayer, choiceCPU, playAgain, scorePlayerDisplay, scoreCpuDisplay, rules, gif, gifLoss;

result = document.querySelector(".result");
win = document.querySelector(".win");
playAgain = document.querySelector(".play-again");
playAgain.style.display = "none";
scorePlayerDisplay = document.querySelector(".score-player-display");
scoreCpuDisplay = document.querySelector(".score-cpu-display");
scoreContainer = document.querySelector(".score-container");
rules = document.querySelector(".rules");
rules.style.display = "none";

choicePlayer = document.querySelector(".choice-player");
choiceCPU = document.querySelector(".choice-cpu");

gif = document.querySelector(".gif");
gifLoss = document.querySelector(".gif-loss");

gif.style.display = "none";
gifLoss.style.display = "none";

function computerPlay() {
    
    let randomChoice = Math.floor(Math.random() * 3)

    if (randomChoice === 0) {
        return "rock";
     
   } if (randomChoice === 1) {
        return "paper";
     
   } if (randomChoice === 2) {
        return "scissors";
   }
}

    rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
    playerSelection = "rock";
    });

    paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
    playerSelection = "paper";
    });

    scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    });

    const icons = document.querySelectorAll("img.icon");
    let transformText = () => {result.classList.toggle("active");}

    icons.forEach((icon) => {
        icon.addEventListener("click", (e) => {
            gameLogic();
            playRound();
            transformText();
    });
});


function gameLogic() {
    if (((playerScore === 5) && (playerScore > computerScore)) || ((computerScore === 5) && (computerScore > playerScore))) {
        newGame();
    } 
}

function playRound() {
    
    const computerSelection = computerPlay();
    result.style.display = "block";
    
        if (playerSelection == computerSelection) {
        result.textContent = "It's a draw.";
        
    }   else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++
            result.textContent = "You lose the round, paper covers rock.";
            

    }   else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++
            result.textContent = "You win the round, paper covers rock.";

    }   else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++
            result.textContent = "You lose the round, scissors cut paper.";

    }   else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++
            result.textContent = "You win the round, scissors cut paper.";

    }   else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++
            result.textContent = "You lose the round, rock beats scissors.";

    }   else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++
            result.textContent = "You win the round, rock beats scissors.";
    } 

    choicePlayer.textContent = "player: " + playerSelection;
    choiceCPU.textContent = "cpu: " + computerSelection;
    scorePlayerDisplay.textContent = "player: " + playerScore;
    scoreCpuDisplay.textContent = "cpu: " + computerScore;
    rules.style.display = "block";

    if (playerScore === 5) {
        gif.style.display = "block";
        win.style.display = "block";
        win.textContent = "Congratulations, you won the game!";
        playAgain.style.display = "block";
        
    }   else if (computerScore === 5) {
        
        gifLoss.style.display = "block";
        win.style.display = "block";
        win.textContent = "Sorry, you lost the game.";
        playAgain.style.display = "block";
    }
    
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    scorePlayerDisplay.textContent = "player: " + playerScore;
    scoreCpuDisplay.textContent = "cpu: " + computerScore;
    result.style.display = "none";
    win.style.display = "none";
    gif.style.display = "none";
    gifLoss.style.display = "none";
    result.style.marginBottom = "20px";
    playAgain.style.display = "none";
}

