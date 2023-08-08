function getComputerChoice() {
    const randomNumb = Math.floor(Math.random() * 3);
    switch (randomNumb) {
      case 0:
        return "Rock";
        break;
      case 1: 
        return "Paper";
        break;
      case 2:
        return "Scissors";
    }
  }
  
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper!";
        } else {
            return "You win! Paper beats Rock!";
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors!";
        } else {
            return "You win! Scissors beats Paper!";
        }
    }
}


function game(){
    let playerScore=0;
    let computerScore=0;
    for (let i=0; i<5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("win")){
            playerScore++;
        } else if (result.includes("lose")){
            computerScore++;
        }
        console.log(result);
        alert(`Player score: ${playerScore}, Computer Score:${computerScore}`);
    }
    if (playerScore>computerScore){
        console.log("You win!");
    } else if (playerScore<computerScore){
        console.log("You lose!");
    } else {
        console.log("It's a tie")
    }
}

game();


// console.log("BA"+ + "hhh" +"A");
