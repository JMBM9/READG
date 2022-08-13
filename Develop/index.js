const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']


// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        prefix: 'Hi! Welcome to your README generator.\nPlease note that all answers should be in markdown. Please provide any screenshots or videos in this format: ![Alt Text](url). Please use <br> for any line breaks. For any code blocks, please wrap them in backticks: `var example = true`.\nLets get started!\n',
        default: 'Project Title'
      },
      {
        type: 'input',
        name: 'version',
        message: 'What is the project version? (use empty value to skip)',
        default: ''
      },
      {
        type: 'input',
        name: 'url',
        message: 'What is the project URL? (use empty value to skip. This link will be converted to markdown for you.)',
        default: ''
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?',
        default: ''
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        default: ''
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage - provide instructions and examples for use.',
        default: ''
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select what license you would like to include:',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'GPL-3.0'],
        default: '0'
      },
      {
        type: 'list',
        name: 'contributing',
        message: 'Please select contributing guidelines:',
        choices: ['Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  Please make sure to update tests as appropriate.', '[Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)', 'No contributions accepted.'],
        default: '1'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Consider providing examples on how to run them.',
        default: ''
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: ''
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide an email for users to contact you with any questions. (this will be converted to markdown for you)',
        default: ''
      }
    ];
    

   

// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "./dist/README.md";

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
    });
}

    writeToFile();
  

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

  
  
    
        

init();
// Function call to initialize app


