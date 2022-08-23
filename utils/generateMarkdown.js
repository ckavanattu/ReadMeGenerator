// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  
  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
  } 
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var Link;
 
  if (license != "None") {
  // select license used
  switch(license) {
    case "MIT":
      Link = "https://mit-license.org/";
      break;
    case "GNU":
      Link = "https://www.gnu.org/licenses/gpl-3.0";
      break; 
    case "MPL2.0":
      Link = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Apache":
      Link = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "Other":
      Link = "";
      break;
    default:
      Link = "";
    }  
  }

  return Link
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let Section = "";

  // create license section if license selected and include link to license info
  if (license != "None") {
    Section += "## License:\n";
    Section += renderLicenseBadge(license) + "\n";
    if (license != "Other") {
      Section += "See " + renderLicenseLink(license) + " to get more information about this license.\n";
  };
  }
  return Section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License Info Below!
  ${renderLicenseLink(data)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact](#contact)
  
  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
 ${renderLicenseSection(data.license[0])}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Contact Information:
  - Github: [${data.githubUserName}](https://github.com/${data.githubUserName})
  - Email: [${data.email}](mailto:user@testexample.com)



`;
}

module.exports = generateMarkdown;
