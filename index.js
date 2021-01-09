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
    },
    {
        // license
        type: 'list',
        message: 'Which license(s) is used for this project?',
        name: 'license',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        // GitHub username
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
    },
    {
        // GitHub repo
        type: 'input',
        message: 'What is the name of the GitHub repo for this project?',
        name: 'repoName',
    },
    {
        // email
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
]).then(response => {
    const readMeOutput = `# ${response.title}
    ## Completed by: 
    ### ${response.githubUsername}
    
    <br />
    
    ## Link: https://${response.githubUsername}.github.io/${repoName}/
    ## BADGE GOES HERE 
    
    <br />
    - - - - 
    
    ## Description: 
    ${response.description}
    
    ## Table of Contents: 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation: 
    ${response.installation}
    
    ## Usage: 
    ${response.usageInfo}
    
    ## License: 
    ${response.license}
    
    ## Contributing: 
    ${response.contributions}
    
    ## Tests: 
    ${response.tests}
    
    ## Questions:
    * https://github.com/${response.githubUsername}
    * ${response.email}
    
    You can reach me via email at the above address with any additionals questions, comments, or concerns regarding this project.`;

    fs.writeFile(`${response.title}-readMe.md`, htmlTemplate, (err) => {
        err ? console.error(err) : console.log('yay!');
    })
});

//TODO: Future Developments
//TODO: While loop - ask if the user would like to add a screenshot, if yes where is it located? if no, break out of the loop
//TODO: While loop - ask if the user would like to add a video, if yes where is it located? if no, break out of the loop
//TODO: Append the screenshots and/or video to the readme


