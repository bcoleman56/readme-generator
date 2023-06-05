// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const gen = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the app?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the app for?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How to use the app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How to install the app?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How to report issues?',
        name: 'reportIssues'
    },
    {
        type: 'input',
        message: 'How to make a contribution?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'List collaborators, third-party assets, and or tutorials followed',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What kind of license do you want?',
        choices: ['MIT', 'apache-2-0'],
        name: 'license'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, gen.generateMarkdown(data), (err) => {
        (err) ? console.log(err) : console.log('README successfully made')
    })
    // Generate markdown
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers.name)
        writeToFile('README.md', answers)
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("prompt couldn't be rendered in current environment")
        } else {
            console.log("something else went wrong")
        }
    })
    

    
}

// Function call to initialize app
init();
