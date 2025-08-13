


let humanScore = 0;
let computerScore = 0;
// rock's value is 0, scissors' value is 1, paper's value is 2


function getComputerChoice(){
    return Math.floor((Math.random() * 3))
}

function getHumanChoice(choice) {
    return choice;
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
        case(humanSelection == computerSelection):{
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

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const result = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(result);

btnRock.addEventListener('click',() => {
    playRound(getHumanChoice(0),getComputerChoice());
    result.textContent = `Tu puntuacion es ${humanScore} y la de la computadora ${computerScore}`;


})
btnPaper.addEventListener('click',() => {
    playRound(getHumanChoice(1),getComputerChoice());
    result.textContent = `Tu puntuacion es ${humanScore} y la de la computadora ${computerScore}`;


})

btnScissors.addEventListener('click',() => {
    playRound(getHumanChoice(2),getComputerChoice());
    result.textContent = `Tu puntuacion es ${humanScore} y la de la computadora ${computerScore}`;


})


const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "se acaban de resetear los puntajes.";
});