/**********************
 * README Generator
 * Copyright 2022
 * Author: Luna Roberge
/**********************/

// #include
const inquirer = require("inquirer");
const fs = require("fs");
const genMd = require("./utils/generateMarkdown.js");

/** Global constants **/
// Version
const version = "0.2.0";

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

// TODO: Create a function to initialize app
function init() {
   print("README Generator, v" + version +'\n');

   var readMe = {};

   inquirer
      .prompt(genMd.questions)
      .then((answers) => {
         readMe = genMd.createReadMe(answers);
         readMe.printMarkdown();
         writeToFile("README_" + Date.now() + ".md", readMe.markdown);
      }); 
}

// Function call to initialize app
init();

