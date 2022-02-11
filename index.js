const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project? ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project here',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps to install the project? ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use this application? ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can people contribute to this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Include any test instructions here',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a licence',
        name: 'licence',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : null);
}

function init() {
    inquirer
        .prompt(
            questions
        )
        .then((data) => {
            return generateMarkdown(data);
        }).then((data) => {
            writeToFile('README.md', data);
        })
};


init();