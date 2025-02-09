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
const container = document.querySelector("#container")
const result = document.querySelector("#result")
const displayHumanScore = document.querySelector("#humanScore")
const displayComputerScore = document.querySelector("#computerScore")
const humanOption = document.querySelector("#humanOption")
const computerOption = document.querySelector("#computerOption")

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      alert("YOU WIN!")
    } else {
      alert("YOU LOSE!")
    }
    location.reload()
  } else {
    if (humanChoice === computerChoice) {
      computerOption.src = `images/${computerChoice}.png`
      humanOption.src = `images/${humanChoice}.png`
      result.textContent = `DRAW! ${computerChoice} is equal ${humanChoice}!`
    } else if (
      humanChoice == "rock" && computerChoice == "paper" ||
      humanChoice == "paper" && computerChoice == "scissors" ||
      humanChoice == "scissors" && computerChoice == "rock") {
      computerOption.src = `images/${computerChoice}.png`
      humanOption.src = `images/${humanChoice}.png`
      computerScore++
      displayComputerScore.textContent = computerScore
      result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}!`
    } else {
      computerOption.src = `images/${computerChoice}.png`
      humanOption.src = `images/${humanChoice}.png`
      humanScore++
      displayHumanScore.textContent = humanScore
      result.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`
    }
  }
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getHumanChoice(button), getComputerChoice())
  })
})
