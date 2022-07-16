const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description', 
    },
    {
        type: 'checkbox',
        name: 'TableofContents',
        message: 'Table of Contents',
        choices: ['Usage, License, Contribution, Test, Questions'],
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is your Usage?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is your license?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are you contributing?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Would you like to run a test?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];
function writeToFile(fileName, data) {
    fs.writeToFile(`./${fileName}`, data, (err) =>{
        if(err){
        console.log(err);
        return
    };
    console.log('README')
})
}
function init() {
    return inquirer.prompt(questions);
};
init()
.then(answers => generateMarkdown(answers))
.then(generateREADME => writeToFile('README.md', generateREADME))
;