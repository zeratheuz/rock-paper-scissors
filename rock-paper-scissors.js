function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3)
  switch (randomNumber) {
    case 1:
      return "rock"
      case 2:
        return "paper"
        case 3:
          return "scissors"
        }
      }
      
function getHumanChoice(e) {
  return e.id
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("DRAW", `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
    } else if (
      humanChoice == "rock" && computerChoice == "paper" || 
      humanChoice == "paper" && computerChoice == "scissors" || 
      humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}! \nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  } else {
    humanScore++
    console.log(`You Win! ${humanChoice} beats ${computerChoice}! \nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  }
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getHumanChoice(button), getComputerChoice())
  })
})



// function playGame() {  


//   for (i = 0; i < 5; i++) {    
//     const humanSelection = getHumanChoice()
//     const computerSelection = getComputerChoice()
    
//     playRound(humanSelection, computerSelection)
//   }

//   if (humanScore > computerScore) {
//     console.log("YOU WIN!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
//   } else if (humanScore < computerScore) {
//     console.log("YOU LOSE!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
//   } else {
//     console.log("UNBELIEVABLE DRAW!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
//   }
// }

// playGame()