function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
console.log(getRandomComputerResult());

/*
  Big Thanks to FreeCodeCamp 

  All rights reserved to FreeCodeCamp 
*/