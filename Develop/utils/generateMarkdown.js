// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {} 


// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache License 2.0') {
    listBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (license === 'GNU General Public License v3.0'){
    listBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    listBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
  } else if (license === 'MIT License') {
    listBadge = '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
}
 
 


//this makes a skeleton of what the readme will look like and the "data." will add certain data to that area
function generateMarkdown(data) {
  return `# ${data.title}
 ## Description
 #${data.description}
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}
 ## License
 ${renderLicenseSection(data.license)}
 ![GitHub badge](${listBadge})
 ## Contributing
 
 ${data.contribution}
 
 ## Tests
 ${data.test}
 ## Questions
 My GitHub: [${data.github}](https://github.com/${data.github})
 Email me: ${data.email}`;
}

module.exports = generateMarkdown;
