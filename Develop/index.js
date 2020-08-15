const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project : ",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License 3.0",
      "BSD 3 License",
      "None",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage guidelines?",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "What does the user need to know about contributing to the project?",
  }
];

// // function to write README file
function writeToFile(fileName, data) {
  
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    
    console.log("Generating README...");

    if (err) throw err;

    console.log("README file Generated!");
  });
}

// // function to initialize program
function init() {
  
  inquirer
    .prompt(questions)
    .then(function (answers) {
      writeToFile("README.md", answers);
    })
    .catch(function (err) {
      console.log(err);
    });
    
}

init();
