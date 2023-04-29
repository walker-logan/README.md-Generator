// this function i had to look up and use chat gpt to get this working
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(
    license
  )})`;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
  let licenseUrl = license.toLowerCase(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
