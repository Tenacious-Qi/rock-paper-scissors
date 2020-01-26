let playerScore = 0;
let computerScore = 0;
let playerSelection, choice, result, win, score, choicePlayer, choiceCPU, playAgain, scorePlayerDisplay, scoreCpuDisplay, rules, gif, gifLoss;

choicePlayer = document.querySelector(".choice-player");
choiceCPU = document.querySelector(".choice-cpu");
result = document.querySelector(".result");
win = document.querySelector(".win");
playAgain = document.querySelector(".play-again");
gif = document.querySelector(".gif");
gifLoss = document.querySelector(".gif-loss");
scorePlayerDisplay = document.querySelector(".score-player-display");
scoreCpuDisplay = document.querySelector(".score-cpu-display");
rules = document.querySelector(".rules");

gif.style.display = "none";
gifLoss.style.display = "none";
playAgain.style.display = "none";
rules.style.display = "none";

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
    rules.style.display = "block";
    
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

    if (playerScore === 5) {
            winDisplay();
            gif.style.display = "block";
            win.textContent = "Congratulations, you won the game!";

    }   else if (computerScore === 5) {
            winDisplay();
            gifLoss.style.display = "block";
            win.textContent = "Sorry, you lost the game.";
    }
}

function winDisplay() {
    win.style.display = "block";
    playAgain.style.display = "block";
    result.style.display = "none";
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    scorePlayerDisplay.textContent = "player: " + playerScore;
    scoreCpuDisplay.textContent = "cpu: " + computerScore;
    result.style.display = "none";
    result.style.marginBottom = "20px";
    win.style.display = "none";
    gif.style.display = "none";
    gifLoss.style.display = "none";
    playAgain.style.display = "none";
}

