const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

function getLicense(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licesnses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![LicenseL LGPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www,gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Mozilla Public License 2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]((https://opensource.org/licenses/MPL-2.0)";
    } else if (value === "Apache License 2.0") {
        return "[![License:](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Boost Software License 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "The Unlicense") {
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)][http://unlicense.org/]";
    }
    
}

function validateInput(value) {
    if(value != "") {
        return true;
    } else {
        return "Please answer the question with some kind of input.";
    }
}


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description',
        validate: validateInput, 
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program.",
        validate: validateInput,
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this program/project",
        validate: validateInput,
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla"
        ],
        validate: validateInput,
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
        validate: validateInput,
    },
    {
        type: "input",
        type: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        validate: validateInput,
    },
    {
        type: "input",
        name: "userName",
        message: "What is you GitHub username?",
        validate: validateInput,
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your Github email address that contributors may contact?",
        validate: function (value) {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        },
    },
];
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
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