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

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
  if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
    return humanChoice
  } else {
    humanChoice = getHumanChoice()
    return humanChoice
  }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()
  if (humanChoice === computerChoice) {
    console.log(`
      DRAW
      SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++
    console.log(`
      You Lose! Paper beats Rock!
      SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++
    console.log(`
      You Lose! Rock beats Scissors!
      SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++
    console.log(`
      You Win! Paper beats Rock!
      SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++
    console.log(`
      You Win! Rock beats Scissors!
      SCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
