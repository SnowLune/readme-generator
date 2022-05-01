function renderLicense(license) {
   // If there is no license, return an empty string
   if (!license)
      return ""
  
   switch (license) {
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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

class markdown {
   constructor() {
      this.content = [];
   }

   addContent(headingText, bodyText, level = 2, inTable = false) {
      let c = {
         name: headingText,
         text: bodyText,
         level: level,
         table: inTable
      }      
      this.content.push(c);
   }

   addTable(headingText) {
      let t = {
         name: headingText,
         text: "",
         isTable: true
      }
   }

   generateTable() {
      var tocIndex = null;

      for (let i = 0; i < this.content.length; i++) {
         if (this.content[i].isTable === true) {
            tocIndex = i;
            break;
         }
      }

      // Don't need to continue if we don't have a table of contents
      if (tocIndex === null) {
         console.log("Did not find table of contents. Continuing...");
         return false;
      }

      for (let i = 0; i < this.content.length; i++) {

      }

   }
   generateFromOrder() {
   }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   var level = ["", "# ", "## ", "### ", "#### ", "##### ", "###### "];
   for (i = 0; i < data.)
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

module.exports = generateMarkdown;
