const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } 
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
      case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You won!"
  }
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won!";
    } else {
      return "Computer won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You won!";
    } else {
      return "Computer won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log(`You throw ${userChoice}`)
  console.log(`Computer throw ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice))
};
playGame();