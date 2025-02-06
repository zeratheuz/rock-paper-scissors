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
  let humanChoice = ""
  humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
  if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
    return humanChoice
  } else {
    humanChoice = getHumanChoice()
    return humanChoice
  }
}
  
function playGame() {  
  let humanScore = 0
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
      alert("DRAW", `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
      } else if (
        humanChoice == "rock" && computerChoice == "paper" || 
        humanChoice == "paper" && computerChoice == "scissors" || 
        humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++
      alert(`You Lose! ${computerChoice} beats ${humanChoice}! \nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
    } else {
      humanScore++
      alert(`You Win! ${humanChoice} beats ${computerChoice}! \nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
    }
  }

  for (i = 0; i < 5; i++) {    
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    
    playRound(humanSelection, computerSelection)
  }

  if (humanScore > computerScore) {
    alert("YOU WIN!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  } else if (humanScore < computerScore) {
    alert("YOU LOSE!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  } else {
    alert("UNBELIEVABLE DRAW!" + `\nSCORE: HUMAN = ${humanScore} || COMPUTER = ${computerScore}`)
  }
}

playGame()