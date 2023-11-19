function renderLicenseBadge(license) {
  if (license) {
    // Return the license badge based on the license type
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    // Return the license link based on the license type
    return `https://opensource.org/licenses/${license}`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license) {
    // Return the license section based on the license type
    return `## License

This project is licensed under the [${license} License](${renderLicenseLink(license)})`;
  }
  return '';
}

module.exports = generateMarkdown;
