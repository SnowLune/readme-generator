// #include
const inquirer = require("inquirer");
const fs = require("fs");
const genMd = require("./utils/generateMarkdown.js");

/** Global constants **/
// Version
const version = "0.1.0";

// Misc functions
function print(c) {
   console.log(c);
   return 0;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   if (!fileName) {
      console.error("ERROR: Invalid filename. Using current date.");
      fileName = Date.now();
   }

   fs.writeFile(fileName, data, 
      E => {
         if (E) {
            console.error(E);
         }
      }
   )
}

// TODO: Create a function to initialize app
function init() {
   print("README Generator, v" + version +'\n');

   var readMe = {};

   inquirer
      .prompt(genMd.questions)
      .then((answers) => {
         readMe = genMd.createReadMe(answers);
         print(readMe.printMarkdown());
         print(readMe.printMarkdown());
         print(readMe.printMarkdown());
         print(readMe.printMarkdown());
      });
   
   // print(readMeMarkdown);
   // writeToFile("README_" + Date.now() + ".md", readMeMarkdown);

}

// Function call to initialize app
init();

