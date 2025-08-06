let humanScore = 0;
let computerScore = 0;
// rock's value is 0, scissors' value is 1, paper's value is 2


function getComputerChoice(){
    return Math.floor((Math.random() * 3))
}

function getHumanChoice() {
    let choice = prompt("Make your choice: ");
    let char = choice.charAt(0).toLowerCase();
    switch(char){
        case "r":{return 0};
        case "s": {return 1};
        case "p": {return 2};
    }

}


function playRound(humanSelection, computerSelection) {
    switch(true) {
        case (humanSelection == 0 && computerSelection == 1): {
            console.log("You won! Rock beats Scissors");
            humanScore += 1;
            break;
        }
        case(humanSelection == 1 && computerSelection == 2 ):{
            console.log("You won! Scissors beats Paper")
            humanScore += 1;
            break;
        }
        case (humanSelection == 2 && computerSelection == 0 ):{
            console.log("You won! Paper beats Rock");
            humanScore +=1
            break;
        }
        case(humanSelection == 1 && computerSelection == 0):{
            console.log("You lost! Rock beats Scissors");
            computerScore +=1;
            break;
        }
        case(humanSelection == 0 && computerSelection == 2): {
            console.log("You lost! Paper beats Rock");
            computerScore +=1
            break;
        }
        case(humanSelection == 2 && computerSelection == 1):{
            console.log("You lost! Scissors beats Paper")
            computerScore +=1;
            break;
        }
        case(humanSelection == 0 && computerelection == 0):
        case(humanSelection == 1 && computerSelection == 1):
        case(humanSelection == 2 && computerSelection == 2): {
            console.log("Empate");
            break;
        }
    }
}


function playGame(){
    for (let i=0; i <5 ;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)
    }
    console.log(`Tu puntuacion es ${humanScore} y la de la computadora ${computerScore}`)
    humanScore = 0;
    computerScore = 0;
}

playGame();