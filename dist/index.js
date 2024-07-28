import inquirer from "inquirer";
import chalk from 'chalk';
import figlet from 'figlet';
async function main() {
    // Generate a heading using figlet
    console.log(chalk.blue(figlet.textSync("Number Guessing Game ", { horizontalLayout: 'full' })));
    let numTries = 3;
    let play = true;
    let actualNumber = Math.floor(Math.random() * 10 + 1);
    while (play) {
        while (numTries > 0) {
            const answers = await inquirer.prompt([
                {
                    name: "playerAnswer",
                    message: "Enter your guessed Number!",
                    type: "number",
                },
            ]);
            if (answers.playerAnswer === actualNumber) {
                console.log(chalk.green("Hurray! You Guessed it Right. You win!🏆"));
                numTries = 0;
            }
            else {
                console.log(chalk.red("You Guessed it Wrong!"));
                if (actualNumber > answers.playerAnswer) {
                    console.log(chalk.yellow("Think Higher Number"));
                }
                else {
                    console.log(chalk.yellow("Think Lower Number"));
                }
                console.log(chalk.cyan(`You have ${numTries - 1} tries left.`));
            }
            numTries--;
        }
        const playAgainAnswer = await inquirer.prompt([
            {
                name: "playAgain",
                message: "Wanna play again?",
                type: "confirm",
            },
        ]);
        if (playAgainAnswer.playAgain) {
            numTries = 3;
            actualNumber = Math.floor(Math.random() * 10 + 1);
        }
        else {
            console.log(chalk.blue("Exiting game..."));
            play = false;
        }
    }
}
main();
