import inquirer from "inquirer";

const answer : {
    Sentences: string
} = await inquirer.prompt([
    {
        name: "Sentences",
        message: "Enter your sentences to count the word:",
        type: "input"
    }
])
const word = answer.Sentences.trim().split("");
console.log(word);

console.log(`Your sentences word count is ${word.length}`);