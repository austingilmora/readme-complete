// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: "What is your Project's name?",
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log("Please enter your project's name!");
                return false;
            }
        }
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
        validate: descInput => {
            if (descInput) {
                return true
            } else {
                console.log('Please include a description!');
                return false;
            }
        }
    },
    // installation 
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a description of how a user could download your project.',
        validate: instInput => {
            if (instInput) {
                return true
            } else {
                console.log('Please include instructions to download your project!');
                return false;
            }
        }
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide some instructions and examples for use of your project',
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log('Please include some instructions/examples for you to use your project!');
                return false;
            }
        }
    },
    // ADD LICENSES!! 
    {
        type: 'list',
        name: 'license',
        message: 'Please provide a license that your application is covered under',
        choices: ['None', 'MIT', 'IBM', 'Apache']
    },
    // contributing
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide some guidelines for others to contribute to your project',
        validate: contributeInput => {
            if (contributeInput) {
                return true
            } else {
                console.log('Please include some guidelines for others to contribute to your project!');
                return false;
            }
        }
    },
    // tests
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project',
        validate: testInput => {
            if (testInput) {
                return true
            } else {
                console.log('Please explain how to test your project!');
                return false;
            }
        }
    },
    // questions
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username where people can contact you for questions?',
        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email where people can contact you for questions?',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(filelocation, data) {
    fs.writeFileSync(filelocation, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        var readmeContent = generateMarkdown(data);
        writeToFile('./dist/README.md', readmeContent);
    })
}

// Function call to initialize app
init();
