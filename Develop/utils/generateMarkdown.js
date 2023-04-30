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
  return `${licenseUrl}`;
}

function renderLicenseSection(license) {
  if (!license) return "";
  return `
  ### Licensing
  ${license}
  ${renderLicenseBadge(license)}`;
}

function renderLinkSection(projectLink) {
  if (!projectLink) {
    return "";
  } else {
    return `
  ### Live Site 
  [Click to see live site.](${projectLink})
  `;
  }
}

function renderDemo(demoLink) {
  if (!demoLink) {
    return "";
  } else {
    return `
    ### Demo 
    ![Demo](${demoLink})
    `;
  }
}

// README.md being printed out
function generateMarkdown(data) {
  const {
    githubUsername,
    licenseChoice,
    confirmLiveLink,
    demoLink,
    liveLink,
    ...info
  } = data;
  return `
  # ${info.projectTitle}

  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${info.projectDescription}
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
  Have any questions/concerns? Reach out to me, [${githubUsername}](https://github.com/${githubUsername}) at ${
    info.userEmail
  }.`;
}

module.exports = generateMarkdown;
