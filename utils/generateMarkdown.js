// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
	let licBadge = ``;
	let dataBadge = data.licenses
	
  if (dataBadge === `MIT`) {
    licBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`
    return licBadge
  } else if (dataBadge === `GNU GPLV3`) {
    licBadge = `https://img.shields.io/badge/License-GPLv3-blue.svg`
    return licBadge
  } else if (dataBadge === `APACHE 2.0`) {
    licBadge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`
    return licBadge
  } else if (dataBadge === `NONE`) {
    licBadge = 'https://img.shields.io/badge/license-Unlicense-blue.svg'
    return licBadge
  }
}

function renderLicenseLink(data) {
  let link = ``;

  let dataLicense = data.licenses

  if (dataLicense === `MIT`) {
    link = `https://opensource.org/licenses/MIT`
    return link;
  } else if (dataLicense === `GNU GPLV3`) {
    link = `https://www.gnu.org/licenses/gpl-3.0`
    return link;
  } else if (dataLicense === `APACHE 2.0`) {
    link = `https://opensource.org/licenses/Apache-2.0`
    return link;
  } else if (dataLicense === `NONE`){
    link = `https://unlicense.org/`
    return link
  }
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
  [![License: ${data.licenses}](${renderLicenseBadge(data)})](${renderLicenseLink(data)})

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
