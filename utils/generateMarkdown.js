//*************************** */
// generateReadMe.js
//*****************************/

const md = require("./markdown.js");

// Prompt tail string
const promptString = "\n>";

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
      default: "MIT"
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

// Takes output of inquirer prompt as input
function createReadMe(a) {
   var readme = new md.Markdown();
   var license = renderLicense(a.projectLicense);

   readme.addHeader(a.projectTitle, 1);
   readme.addContent("Description", a.projectDescription, 2);
   readme.addTable();
   readme.addContent("Installation", a.projectInstall, 2, true);
   readme.addContent("Usage", a.projectUsage, 2, true);
   readme.addHeader("License", 3, true);
   readme.addContent("Contributing", a.projectContrib, 3, true);
   readme.addContent("Tests", a.projectTest, 3, true);
   readme.addContent("Questions", a.projectQuestions, 3, true);

   // Generate the README object
   readme.generate();

   readme.content[0].mdString += license.badgeMarkdown;
   readme.content[5].mdString += license.sectionText;

   return readme;
}

function renderLicense(license) {
   // If there is no license, return an empty string
   if (!license)
      return ""

   var licenseInfo = {
      badgeMarkdown: "",
      link: "",
      sectionText: ""
   };

   switch (license) {
      case "Apache":
         licenseInfo.link = "https://opensource.org/licenses/Apache-2.0";
         licenseInfo.badgeMarkdown = "[![License]"
               +"(https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
               +"(" + licenseInfo.link + ")\n";
         break;
      case "BSD":
         licenseInfo.link = "https://opensource.org/licenses/BSD-3-Clause";
         licenseInfo.badgeMarkdown = "[![License]"
               +"(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
               +"(" + licenseInfo.link + ")\n";
         break;
      case "GPLv2":
         licenseInfo.link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
         licenseInfo.badgeMarkdown = "[![License: GPL v2]"
               +"(https://img.shields.io/badge/License-GPL_v2-blue.svg)]"
               +"(" + licenseInfo.link + ")\n";
         break;
      case "GPLv3":
         licenseInfo.link = "https://www.gnu.org/licenses/gpl-3.0";
         licenseInfo.badgeMarkdown = "[![License: GPL v3]"
               +"(https://img.shields.io/badge/License-GPLv3-blue.svg)]"
               +"(" + licenseInfo.link + ")\n";
         break;
      case "MIT":
         licenseInfo.link = "https://opensource.org/licenses/MIT";
         licenseInfo.badgeMarkdown = "[![License: MIT]"
               +"(https://img.shields.io/badge/License-MIT-yellow.svg)]"
               +"(" + licenseInfo.link + ")\n";
         break;
      default:
         break;
   }

   licenseInfo.sectionText = "This project is licensed under the "
         +license + " license.\n"
         +"Learn more about the license [here](" + licenseInfo.link + ").\n"

   return licenseInfo;
}

module.exports = { questions, createReadMe, renderLicense };

