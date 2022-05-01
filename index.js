// #include
const fs = require("fs");
const inq = require("inquirer");

/** Global constants **/
// Version
const version = "0.1.0";
// Prompt tail string
const promptString = "\n>";

// Misc functions
function print(c) {
   console.log(c);
   return 0;
}

// Place data in object we can use with generateMarkdown
function toMdData(a) {
   d = [
      {
         name: a.projectTitle,
         level: 1,
         text: a.projectTitle
      },
      {
         name: a.projectDescription,
         level: 2,
         text: a.projectDescription
      },
      {
         name: "Installation",
         level: 2,
         text: a.projectInstall
      },
      {
         name: "Usage",
         level: 2,
         text: a.projectUsage
      },
      {
         name: "License",
         level: 3,
         text: a.projectLicense
      },
      {
         name: "Contributing",
         level: 3,
         text: a.projectContrib
      },
      {
         name: "Tests",
         level: 3,
         text: a.projectTest
      },
      {
         name: "Questions",
         level: 3,
         text: a.projectQuestions
      }
   ]
}

const questions = [
   {
      type: "input",
      name: "projectTitle",
      message: "What is the title the project?" + promptString,
      default: "Project Title",
      validate: () => { return true }
   },
   {
      type: "input",
      name: "projectDescription",
      message: "Enter a description of your project" + promptString,
      default: "",
      validate: () => { return true }
   },
   {
      type: "input",
      name: "projectInstall",
      message: "Enter installation instructions for your project" + promptString,
      default: ""
   },
   {
      type: "input",
      name: "projectUsage",
      message: "Enter usage information for your project" + promptString,
      default: ""
   },
   {
      type: "input",
      name: "projectContrib",
      message: "Enter contribution guidelines for your project" + promptString,
      default: ""
   },
   {
      type: "input",
      name: "projectTest",
      message: "Enter test instructions for your project" + promptString,
      default: ""
   },
   {
      type: "list",
      name: "projectLicense",
      message: "Select the source code license for this project",
      choices: ["Apache", "MIT", "GPLv2", "GPLv3"],
      default: ""
   },
   {
      type: "input",
      name: "githubUserName",
      message: "Enter your GitHub username" + promptString,
      default: ""
   },
   {
      type: "input",
      name: "emailAddress",
      message: "Enter your email address" + promptString,
      default: ""
   }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   print("README Generator, v" + version +'\n');

   inq
      .prompt(questions)
      .then((answers) => {
         print(JSON.stringify(answers));
      });

}

// Function call to initialize app
init();

