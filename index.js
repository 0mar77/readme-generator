// Imports inquirer fs packages
const inquirer = require('inquirer');
const fs = require('fs');

// Imports gereateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array containing questions that the user will have to answer
const questions = [
    // Title
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        // This question requires a user input. Otherwise you will be asked the question until it is answered
        validate: (answer) => {
            if(answer === ''){
                return 'Please enter your project title!'
            }
            return true
        }
    },

    // Description 
    // The followiung four questions are for the description
    {
        type: 'input',
        name: 'DescriptionFirst',
        message: 'What was your motivation for building this project?'
    },

    {
        type: 'input',
        name: 'DescriptionSecond',
        message: 'Why did you build this project?'
    },

    {
        type: 'input',
        name: 'DescriptionThird',
        message: 'What problem does it solve?'
    },

    {
        type: 'input',
        name: 'DescriptionFourth',
        message: 'What did you learn creating this project'
    },

    // Installation
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps to install your project?'
    },

    // Usage
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the instructions for using your project? Please add exapmles.'
    },


    // Contributing
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can other developers contribute to the project?'
    },

    // Tests
    {
        type: 'input',
        name: 'Tests',
        message: 'What are some tests you have created for your project?'
    },

    // License
    {
        type: 'list',
        name: 'License',
        message: 'What license do you want to use?',
        choices:['None', 'Apache_License_2.0', 'GNU_General_Public_License_v3.0', 'MIT_License', 'BSD_2', 'BSD_3', 'Boost_Software_License_1.0', 'Creative_Common_Zero_v1.0_Universal', 'Eclipse_Public_License_2.0', 'GNU_Affero_General_Public_License_v3.0', 'GNU_General_Public_License_v2.0', 'GNU_Lesser_General_Public_License_v2.0', 'Mozilla_Public_License', 'The_Unlicense'],
        default: 'None'
    },

    // Following two user inputs will be added to the Questions section of the README
    // Github User
    {
        type: 'input',
        name: 'GithubUsername',
        message: 'What is your Github username?'
    },

    // Email
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email?'
    }
];

// Function that creates the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data)
        }
    })
}

// Function that initializes the app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function that initializes the app
init();
