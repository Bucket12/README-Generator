// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project/application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What does your project/application do?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Does your user need to install anything? List them here.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How does the user interact with your project/application?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license did you use for this project/application?',
        name: 'licenses',
        choices: [
            'MIT',
            'GNU GPLV3',
            'APACHE 2.0',
            'NONE'
        ],
    },
    {
        type: 'input',
        message: 'please enter any tests you may have for your project/application.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Did any one else help contribute to your project/application?',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Please add your deployed link here.',
        name: 'eLink'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);

fs.writeFileSync(fileName, content, console.log('Congrats! Your README has been created.'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {writeToFile(`${answers.title}-README.md`, answers)})
        .catch(error => {console.error(`Oops: ${error}`)})
}

// Function call to initialize app
init();
