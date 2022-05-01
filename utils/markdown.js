// A Markdown class because classes are fun imo
class Markdown {
   constructor() {
      this.content = [];
      this.markdown = "";
   }

   // Add a header and text
   addContent(headingText, bodyText, level = 2, inTable = false) {
      let c = {
         name: headingText,
         text: bodyText,
         level: level,
         mdString: "",
         table: inTable
      }      
      this.content.push(c);
   }

   // Add only a header
   addHeader(h, level = 2, inTable = false) {
      let header = {
         name: h,
         level: level,
         mdString: "",
         table: inTable
      }
      this.content.push(header);
   }

   // Add only text
   addText(t) {
      let text = {
         text: t,
         mdString: ""
      }
      this.content.push(text);
   }

   // headingText: in case you want to use a unique toc name like "Contents"
   addTable(headingText = "Table of Contents", level = 2) {
      let t = {
         name: headingText,
         text: "",
         level: level,
         mdString: "",
         isTable: true
      }
      this.content.push(t);
   }

   levelString(mdContentObj) {
      const level = ["", "# ", "## ", "### ", "#### ", "##### ", "###### "];
      let L = level[mdContentObj.level];
      return L;
   }

   generate(m = this.content) {
      var tocIndex = null;
      const endl = "\n";

      //
      // Find table of contents
      //
      for (let i = 0; i < m.length; i++) {
         if (m[i].isTable === true) {
            tocIndex = i;
            break;
         }
      }

      // Don't need to continue if we don't have a table of contents
      if (tocIndex === null) {
         console.log("Did not find table of contents. Continuing...");
      }
      else {
         // ...Create TOC string if we did find it, starting with the header
         m[tocIndex].mdString = 
            this.levelString(m[tocIndex])
               + m[tocIndex].name + endl;
         
         // Generate table list string
         var tableListStr = "";
         for (let i = 0; i < m.length; i++) {
            if (m[i].table === true) {
               let name = m[i].name;
               tableListStr += (`- [${name}](#${name.toLowerCase()})${endl}`);
            }
         }
         // Add the table list to the markdown string
         m[tocIndex].mdString += tableListStr;
      }

      //
      // Generate Markdown for each object individually
      //
      for (let i = 0; i < m.length; i++) {
         // Skip table of contents, it's special
         if (i === tocIndex)
            continue;

         // String to hold all our Markdown
         var markdown = "";
         // Header
         if (m[i].name) {
            markdown += this.levelString(m[i]);
            markdown += m[i].name + endl;
         }
         // Text
         if (m[i].text) {
            markdown += m[i].text + endl + endl;
         }

         m[i].mdString = markdown;
      }
   }

   printMarkdown(m = this.content) {
      var md = "";
      for (let i = 0; i < m.length; i++) {
         if (m[i].mdString) {
            md += m[i].mdString;
         }
         else if (m[i].text) {
            md += m[i].text;
         }
      }
      
      this.markdown = md;
      return this.markdown;
   }
}

module.exports = { Markdown };
