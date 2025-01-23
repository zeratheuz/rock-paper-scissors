function getComputerChoice () {
  randomNumber = Math.ceil(Math.random() * 3)
  switch (randomNumber) {
    case 1:
      return "rock"
    case 2:
      return "paper"
    case 3:
      return "scissors"
  }
}

console.log(getComputerChoice())
