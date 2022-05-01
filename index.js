// #include
const inquirer = require("inquirer");
const fs = require("fs");
const genMd = require("./utils/generateMarkdown.js");

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



const questions = [
   {
      type: "input",
      name: "projectTitle",
      message: "What is the title the project?" + promptString,
      default: "Project Title",
   },
   {
      type: "input",
      name: "projectDescription",
      message: "Enter a description of your project" + promptString,
      default: "Welcome to my project!",
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
      choices: ["Apache", "BSD", "MIT", "GPLv2", "GPLv3"],
      default: this.choices[2]
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
function writeToFile(fileName, data) {
   if (!fileName) {
      console.error("ERROR: Invalid filename. Using current date.");
      fileName = Date.now();
   }

   fs.writeFile("./" + fileName)
}

// TODO: Create a function to initialize app
function init() {
   print("README Generator, v" + version +'\n');

   inquirer
      .prompt(questions)
      .then((answers) => {
         genMd.toMdData(answers);
      });

}

// Function call to initialize app
init();

