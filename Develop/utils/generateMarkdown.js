// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var listBadge;
        if (license === 'Apache License 2.0') {
          listBadge = 'https://img.shields.io/badge/Apache%20License%202.0-license-black'
        } else if (license === 'GNU General Public License v3.0'){
          listBadge = 'https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-license-black'
        } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
          listBadge = 'https://img.shields.io/license/BSD%203--Clause%60-badge-black'
        } else if (license === 'MIT License') {
          listBadge = 'https://img.shields.io/license/MIT-badge-black'
        };
  }


// If there is no license, return an empty string
// function renderLicenseLink(license) {
  
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//   if (license.length === 0) {
//     return ""
//   } else {
//     return `## License
//   ${renderLicenseBadge(license)}
  
//   ${renderLicenseLink(license)} 
//     `
//   }
// }

//this makes a skeleton of what the readme will look like and the "data." will add certain data to that area
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
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
 ${renderLicenseSection(data.license)}
 ## Contributing
 
 ${data.contribution}
 
 ## Tests
 ${data.test}
 ## Questions
 My GitHub: [${data.github}](https://github.com/${data.github})
 Email me: ${data.email}
}`;
}

module.exports = generateMarkdown;
