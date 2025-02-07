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
const score = document.querySelector("#score")
score.textContent = `SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`
const container = document.querySelector("#container")
const result = document.createElement("div")
container.appendChild(result)

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore  === 5){
    if (humanScore > computerScore) {
      alert("YOU WIN!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
    } else {
      alert("YOU LOSE!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
    } 
    location.reload()
  } else {
    if (humanChoice === computerChoice) {
      score.textContent = `SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`
      result.textContent = `DRAW! ${computerChoice} is equal ${humanChoice}!`
      } else if (
        humanChoice == "rock" && computerChoice == "paper" || 
        humanChoice == "paper" && computerChoice == "scissors" || 
        humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++
      result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}!`
      score.textContent = `SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`
    } else {
      humanScore++
      result.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`
      score.textContent = `SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`
    }
  }
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getHumanChoice(button), getComputerChoice())
  })
})
