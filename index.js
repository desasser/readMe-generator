// require the inquirer and fs npm
const inquirer = require('inquirer');
const fs = require('fs');

// utilize inquirer prompt method to take user input
inquirer.prompt([
    {
        // take in the title of the project
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        // take in a description of the project
        type: 'input',
        message: 'Describe this project:',
        name: 'description',
    },
    {
        // installation instructions
        type: 'input',
        message: 'How is this project installed?',
        name: 'installation',
    },
    {
        // usage info
        type: 'input',
        message: 'What is this project used for?',
        name: 'usageInfo',
    },
    {
        // contribution guidelines
        type: 'input',
        message: 'How should someone else contribute to this project?',
        name: 'contributions',
    },
    {
        // test instructions
        type: 'input',
        message: 'How should this project be tested?',
        name: 'tests',
    }
]).then(response => {
    const readMeOutput = ``;

    fs.writeFile(`output/${response.username}.html`, htmlTemplate, (err) => {
        err ? console.error(err) : console.log('yay!');
    })
});


