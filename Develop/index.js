// TODO: Include packages needed for this application
// allows you to work with the file system on your computer.
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// this provides utilities for working with file and directory paths
const path = require("path");
// this variable is the path to the readme 
const readMeLocation = path.join(process.cwd(), "readMe.md");

// TODO: Creates an array of questions for user input
var questions = [
  {
    type: "input",
    name: "title",
    message: "Whats the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your Project in 1-2 sentences: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the Usage of your Project?",
  },
  {
    type: "list",
    name: "license",
    message: "License: ",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 3-Clause "New" or "Revised" License',
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Contribution Guidelines: ",
  },
  {
    type: "input",
    name: "test",
    message: "Test Instructions: ",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Email: ",
  },
];
// let listBadge;
//         if (license === 'Apache License 2.0') {
//           listBadge = 'https://img.shields.io/badge/Apache%20License%202.0-license-black'
//         } else if (license === 'GNU General Public License v3.0'){
//           listBadge = 'https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-license-black'
//         } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
//           listBadge = 'https://img.shields.io/license/BSD%203--Clause%60-badge-black'
//         } else if (license === 'MIT License') {
//           listBadge = 'https://img.shields.io/license/MIT-badge-black'
//         };
// this function is finding the readme file location and adding data to the right file and when done correctly it says success
function writeToFile(data) {
  fs.writeFile(readMeLocation, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// // TODO: Create a function to initialize app
// this function initializes the questions to a prompt and then the answers are written to the file
function init() {
  inquirer
    .prompt(questions)
    .then((answer) => {
      writeToFile(answer);
    })
    
}

// Function call to initialize app
init();
