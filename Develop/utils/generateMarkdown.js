// TODO: Create a function that returns a license 
//  badge based on which license is passed in
//  If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    // return `https://img.shields.io/badge/license-${license}-brightgreen`
    return `https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen`
  }
  return '' ;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `https://opensource.org/licenses/${license}`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)} )]( ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
[![License Badge]( ${renderLicenseSection(data.license)} )    

## Description

${data.description}


## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[Contribution](#contribution)
-[Tests](#tests)


## Installation

${data.installation}


## Usage

${data.usage}


## Credits

${data.credits}


## How to Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

Email: ${data.email}

GitHub: github.com/${data.github}


`;
}

module.exports = {generateMarkdown}
