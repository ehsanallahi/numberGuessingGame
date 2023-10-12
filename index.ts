import inquirer from "inquirer";

async function main() {
 
  let randNum = Math.floor(Math.random() * 10 + 1);
//   console.log("rand num is ", randNum);
  
  
  let numTries: number = 3;
  const actualNumber: number = randNum;

  while (numTries > 0) {
    const answers: { playerAnswer: number } = await inquirer.prompt([{
      name: "playerAnswer",
      message: "Enter your guessed Number!",
      type: "number"
    }]);

    if (answers.playerAnswer === actualNumber) {
      console.log("Hurray! You Guessed it Right. Game ends");
      numTries = 0;
    } else {
      console.log("You Guessed it Wrong!");
      if (actualNumber > answers.playerAnswer)
      {
        console.log("Think Higher Number");
        
      }else{
        console.log("Think Lower Number");
        
      }
      console.log(`You have ${numTries - 1} tries left.`);
    }

    numTries--;
  }
}

main();
