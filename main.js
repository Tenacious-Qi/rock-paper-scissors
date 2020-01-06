let playerScore = 0;
let computerScore = 0;

    // determines computer's choice

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

    // function to define player's choice

function promptHuman () {
    return window.prompt("Rock, paper, or scissors", "rock").toLowerCase();
}

    //plays a round of Rock Paper Scissors and displays results

function playRound() {
    
    const playerSelection = promptHuman();
    const computerSelection = computerPlay()

    if (playerSelection == computerSelection) {
            console.log("Player choice: " + playerSelection + " | " + "CPU choice: " + computerSelection);
            console.log("Player: " + playerScore + " | " + "CPU: " + computerScore);
            return ("It's a draw");

    }   else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++
            console.log("Player choice: " + playerSelection + " | " + "CPU choice: " + computerSelection);
            console.log("Player: " + playerScore + " | " + "CPU: " + computerScore);
            return ("You lose! Paper covers Rock.");

    }   else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++
            console.log("Player choice: " + playerSelection + " | " + "CPU choice: " + computerSelection);
            console.log("Player: " + playerScore + " | " + "CPU: " + computerScore);
            return ("You win! Paper covers Rock.");
            

    }   else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++
            console.log("Player choice: " + playerSelection + " | " + "CPU choice: " + computerSelection);
            console.log("Player: " + playerScore + " | " + "CPU: " + computerScore);
            return("You lose! Scissors cut paper."); 

    }   else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++
            console.log("Player choice: " + playerSelection + " | " + "CPU choice: " + computerSelection);
            console.log("Player: " + playerScore + " | " + "CPU: " + computerScore);
            return("You win! Scissors cut paper.");

    }   else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++
            console.log("Player choice: " + playerSelection + " | " + "CPU choice: " + computerSelection);
            console.log("Player: " + playerScore + " | " + "CPU: " + computerScore);
            return("You lose! Rock beats scissors.");

    }   else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++
            console.log("Player choice: " + playerSelection + " | " + "CPU choice: " + computerSelection);
            console.log("Player: " + playerScore + " | " + "CPU: " + computerScore);
            return("You win! Rock beats scissors.");

    }   else {
        return ("Please enter rock, paper, or scissors");
    }
    
}

for(i = 0; i < 5; i ++) {
    console.log("Round " + (i + 1) + " result: " + playRound());
}

console.log("Final Score, Player: " + playerScore + " | " + "CPU: " + computerScore);

if (playerScore === computerScore) {
    console.log("It's a draw")
}
else if (playerScore > computerScore) {
    console.log("You win!")
}
else {
    console.log("Sorry, you lose.")
}
