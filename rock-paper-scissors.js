function getComputerChoice () {
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

function getHumanChoice () {
  let humanChoice = prompt("Rock, Paper or Scissors?")
  return humanChoice
}

let humanScore = 0
let computerScore = 0
