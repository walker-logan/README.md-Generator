// this function i had to look up and use chat gpt to get this working

// rendering license
function renderLicenseBadge(license) {
  if (!license) return "";
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(
    license
  )})`;
}

function renderLicenseLink(license) {
  if (!license) return "";
  let licenseUrl = license.toLowerCase(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`;
}

function renderDemo(license) {
  if (!license) return "";
  return `
  ### Live Site
  [Click to see live site.](${liveLink})`;
}

// README.md being printed out
function generateMarkdown(data) {
  const {
    githubUserName,
    licenseChoice,
    confirmLiveLink,
    demoLink,
    liveLink,
    ...info
  } = data;
  return `
  # ${projectTitle}

  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${renderLicenseSection(licenseChoice)} 
  ${renderLinkSection(liveLink)}
  ${renderDemo(demoLink)}

  ## Installation
  ${info.installationInstructions}

  ## Usage 
  ${info.usageInstructions}

  ## Contribution
  ${info.contributionInstructions}

  ## Testing
  ${info.testInstructions}

  ## Questions
  Reach out to the repo owner, [${githubUserName}](https://github.com/${githubUserName}) at ${
    info.userEmail
  }.`;
}

module.exports = generateMarkdown;
