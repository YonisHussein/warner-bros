const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


const questions = [
    {
        type: input,
        name: title,
        message: 'What is the title of your project?',
    }
    {
        type: input,
        name: description,
        message: 'What is your description', 
    }
    {
        type: checkbox,
        name: TableofContents,
        message: 'Table of Contents'
        choices: ,
    }
    {
        type: input,
        name: Usage,
        message: 'What is your Usage?',
    }
    {
        type: input,
        name: license,
        message: 'What is your license'?,
    }
    {
        type: input,
        name: contributing,
        message: 'What are you contributing?',
    }
    {
        type: input,
        name: Test,
        message: 'Would you like to run a test?',
    }
    {
        type: input,
        name: questions,
        message: 'Do you have any questions?',
    }
]