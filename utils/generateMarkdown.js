// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
let license = '';
switch (data.license) {
  case 'MIT':
    license = `[![license: MIT](https://img.shields.io/badge/License/${data.licenses})](https://opensource.org/licenses/MIT)]`
    break;
  case 'GNU GPLV3':
    license = `[![License: GPL v3](https://img.shields.io/badge/License/${data.licenses})](https://www.gnu.org/licenses/gpl-3.0)`
    break;
  case `APACHE 2.0`:
    license = `[![License](https://img.shields.io/badge/License/${data.licenses})](https://opensource.org/licenses/Apache-2.0)`
    break;
}
return license;
}

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
  ${renderLicenseBadge(data)}

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
