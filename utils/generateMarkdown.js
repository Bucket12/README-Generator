// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents:

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Questions](#questions)
  
  ## Installation:
  Please install the following requirements:

  ${data.installation}

  ## Usage: 
  Please visit: ${data.eLink}

  Then you may need to:
  ${data.usage}

  ## License:
  

  ## Tests:
  ${data.tests}

  ## Credits:
  Thanks to: ${data.credits}

  ## Questions?:
  Please feel free to reach out to me using the information below:

  * Email: ${data.email}

  * GitHub: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
