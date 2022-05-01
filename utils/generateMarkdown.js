//*************************** */
// generateReadMe.js
//*****************************/


const md = require("./markdown.js");

// Place data in object we can use with generateMarkdown
function toMdData(a) {
   var d = new md.Markdown();
   d.addContent(a.projectTitle, null, 1);
   d.addContent("Description", a.projectDescription, 2);
   d.addContent("Installation", a.projectInstall, 2, true);
   d.addContent("Usage", a.projectUsage, 2, true);
   d.addContent("License", a.projectLicense, 3, true);
   d.addContent("Contributing", a.projectContrib, 3, true);
   d.addContent("Tests", a.projectTest, 3, true);
   d.addContent("Questions", a.projectQuestions, 3, true);

   console.log(JSON.stringify(d));

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

function generateMarkdown(data) {
   
  // for (i = 0; i < data.)
   /*var md = {
      title: "# " + data.title,
      description: "## Description\n" + data.description,
      tableOfContents: "## Table of Contents\n" + () => {
         for (i = 0; i < data.sections.length; i++) {
            
         }
      }
   }
   var mdTitle = "# " + data.title;
   var mdDescription = "## Description\n" + data.description;
   var mdTable = "## Table of Contents\n" + () => {
      for (i = 0; i < data.sectionCount; i++) {

      }
   }
   return 
   `# ${data.title}\n\n` +
   `## Description\n${data.description}\n\n` +
   `## Table of Contents`*/

}

module.exports = {toMdData, renderLicense, generateMarkdown};

