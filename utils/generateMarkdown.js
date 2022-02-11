function renderLicenseBadge(license) {
  if (license) {
    return `![${license}](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  
  if (license) {
    return `[License](#license)\n`
  } else {
    return ``;
  }
}

function renderLicenseSection(license) {
  
  if (license) {
    return `## License\nThis product is under the ${license}.\n`
  } else {
    return ``;
  }
}

function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.licence)}
## Table of Contents\n
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
${renderLicenseLink(data.licence)}
[Contributing](#contributing)\n
[Tests](#tests)\n
[Questions](#questions)\n
## Description\n${data.description}\n
${renderLicenseSection(data.licence)}
## Installation\n${data.installation}\n
## Usage\n${data.usage}\n
## Contributing\n${data.contribution}\n
## Tests\n${data.test}\n
## Questions
https://github.com/${data.userName} \n
Reach me at: ${data.email}`
}

module.exports = generateMarkdown;