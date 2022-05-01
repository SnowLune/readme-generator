//*************************** */
// generateReadMe.js
//*****************************/


const md = require("./markdown.js");

// Place data in object we can use with generateMarkdown
function toMdData(a) {
   var d = new md.Markdown();
   d.addHeader(a.projectTitle, 1);
   d.addContent("Description", a.projectDescription, 2);
   d.addTable();
   d.addContent("Installation", a.projectInstall, 2, true);
   d.addContent("Usage", a.projectUsage, 2, true);
   d.addContent("License", a.projectLicense, 3, true);
   d.addContent("Contributing", a.projectContrib, 3, true);
   d.addContent("Tests", a.projectTest, 3, true);
   d.addContent("Questions", a.projectQuestions, 3, true);

   d.generate();
   d.printMarkdown();
}

function renderLicense(license, mdObj) {
   // If there is no license, return an empty string
   if (!license)
      return ""
  
   switch (license) {
      case "Apache":
         break;
      case "GPLv2":
         break;
      case "GPLv3":
         break;
      case "MIT":
         break;
      default:
         break;
   }
   // BADGE
   // get the badge

   // LINK


   // SECTION
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

module.exports = { toMdData, renderLicense };

