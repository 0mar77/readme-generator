// Function that returns a license badge 
function renderLicenseBadge(license) {
  // If there is no license, it will return an empty string
  if(license === 'None') {
    return ''
  } else {
    return `![${license}](https://img.shields.io/badge/license-${license}-green)`
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, it will return an empty string
  if(license === 'None') {
    return ''
  } else if (license === 'Apache_License_2.0') {
    return `![Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'GNU_General_Public_License_v3.0') {
    return `![GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if (license === 'MIT_License') {
    return `![MIT License](https://tlo.mit.edu/learn-about-intellectual-property/software-and-open-source-licensing/open-source-licensing)`
  } else if (license === 'BSD_2') {
    return `![BSD 2](https://opensource.org/license/bsd-2-clause/)`
  } else if (license === 'BSD_3') {
    return `![BSD 3](https://opensource.org/license/bsd-3-clause/)`
  } else if (license === 'Boost_Software_License_1.0') {
    return `![Boost Software License 1.0]https://www.boost.org/LICENSE_1_0.txt`
  } else if (license === 'Creative_Common_Zero_v1.0_Universal') {
    return `![Creative Common Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'Eclipse_Public_License_2.0') {
    return `![Eclipse Public License 2.0](https://www.eclipse.org/legal/epl-2.0/)`
  } else if (license === 'GNU_Affero_General_Public_License_v3.0') {
    return `![GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)`
  } else if (license === 'GNU_General_Public_License_v2.0') {
    return `![GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license === 'GNU_Lesser_General_Public_License_v2.0') {
    return `![GNU Lesser General Public License v2.0](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`
  } else if (license === 'Mozilla_Public_License') {
    return `![Mozilla Public License](https://www.mozilla.org/en-US/MPL/)`
  } else {
    return `![The Unlicense](https://unlicense.org/)`
  }
}

// Function that creates the license section of the README
function renderLicenseSection(license) {
  // If there is no license, it will return an empty string
  if(license === 'None') {
    return ''
  } else {
    return `
  # License
  - This application is covered under: ${license}
  `
  }
}

// Function that generates markdown
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)}

  # Description
  - ${data.DescriptionFirst}
  - ${data.DescriptionSecond}
  - ${data.DescriptionThird}
  - ${data.DescriptionFourth}

  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation
  - ${data.Installation}

  # Usage
  - ${data.Usage}

  ${renderLicenseSection(data.License)}
  ${renderLicenseLink(data.License)}

  # Contributing
  - ${data.Contributing}

  # Tests
  - ${data.Tests}

  # Questions
  - ![Github User Profile](https://github.com/${data.GithubUsername})
  - If you have any additional questions, you can reach me at: ${data.Email}

`;
}

// Exports generateMarkdown function
module.exports = generateMarkdown;
