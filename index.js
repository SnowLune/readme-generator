/**********************
 * README Generator
 * Copyright 2022
 * Author: Luna Roberge
/**********************/

// #include
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generate-readme-cli.js");

/** Global constants **/
// Version
const version = "1.0.0";

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
         else {
            print(`Successfuly wrote file '${fileName}'.`)
         }
      }
   )
}

function init() {
   print("README Generator, v" + version +'\n');

   var readMe = {};

   inquirer
      .prompt(generateReadMe.questions)
      .then((answers) => {
         readMe = generateReadMe.createReadMe(answers);
         readMe.setMarkdown();

         var date = new Date();
         writeToFile("README_" + date.toISOString() + ".md", readMe.markdown);
      }); 
}

// Function call to initialize app
init();

