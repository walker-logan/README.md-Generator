const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions

const questions = [
  // github username
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your Github Username",
    validate: (gihubUsernameInput) => {
      if (gihubUsernameInput) {
        return true;
      } else {
        console.log("Please enter your Github username.");
        return false;
      }
    },
  },

  // email
  {
    type: "input",
    name: "userEmail",
    message: "What's your email for contact?",
    validate: (userEmailInput) => {
      if (userEmailInput) {
        return true;
      } else {
        console.log("Please provide your email.");
        return false;
      }
    },
  },

  // project title
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
    validate: (projectTitleInput) => {
      if (projectTitleInput) {
        return true;
      } else {
        console.log("Please enter the title of your project.");
        return false;
      }
    },
  },

  // desciption of project
  {
    type: "input",
    name: "projectDescription",
    message: "Provide a detailed description of your project.",
    validate: (projectDescriptionInput) => {
      if (projectDescriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your project.");
        return false;
      }
    },
  },

  // do they have a demo link?
  {
    type: "confirm",
    name: "confirmDemoLink",
    message:
      "Have a video or gif of the project's demo and want to include it? --Note: you can't embed a YouTube video. You must have the video or gif already uploaded to the project's GitHub repository.--",
    default: false,
  },

  // get the demo link
  {
    type: "input",
    name: "demoLink",
    message: "Provide the link to embed the gif or video:",
    when: ({ confirmDemoLink }) => confirmDemoLink,
    validate: (demoLink) => {
      if (demoLink) {
        return true;
      } else {
        console.log(
          "Shucks... What happened? Provide a valid link to your demo."
        );
        return false;
      }
    },
  },

  // project license
  {
    type: "list",
    name: "licenseChoice",
    message: "If you have one, what kind of license does your project have?",
    choices: ["Apache 2.0", "MIT", "GPL 3.0", "None"],
  },

  // live link to site
  {
    type: "confirm",
    name: "confirmLiveLink",
    message: "If you have a live site, would you like to include it?",
    default: false,
  },

  {
    type: "input",
    name: "liveLink",
    message: "",
    when: ({ confirmLiveLink }) => confirmLiveLink,
    validate: (liveLink) => {
      if (liveLink) {
        return true;
      } else {
        console.log("Please enter the link to your live site.");
        return false;
      }
    },
  },

  // project install
  {
    type: "input",
    name: "installationInstructions",
    message: "Provide instructions to install your project:",
    validate: (installationInstructions) => {
      if (installationInstructions) {
        return true;
      } else {
        console.log(
          "Please provide instructions how the user is can install your project."
        );
        return false;
      }
    },
  },

  // project usage
  {
    type: "input",
    name: "usageInstructions",
    message:
      "Provide instructions and examples so users/contributors can use the project:",
    validate: (usageInstructions) => {
      if (usageInstructions) {
        return true;
      } else {
        console.log("Please provide instructions to use your project:");
        return false;
      }
    },
  },

  // contribution
  {
    type: "input",
    name: "contributionInstructions",
    message:
      "Provide instructions on how users can contribute to your project:",
    validate: (contributionInstructions) => {
      if (contributionInstructions) {
        return true;
      } else {
        console.log("Please provide how users can contribute to the project:");
        return false;
      }
    },
  },

  // project testing
  {
    type: "input",
    name: "testInstructions",
    message: "Provide instructions on how users can test your project:",
    validate: (testInstructions) => {
      if (testInstructions) {
        return true;
      } else {
        console.log(
          "Please enter instructions on how users can test your project:"
        );
        return false;
      }
    },
  },
];

// letting the user know it has been done/failed
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw new Error(err);
    console.log(
      "README.md generated. It will be located in the new lazybones folder. Thanks for being lazy."
    );
  });
}

function init() {
  console.log(
    `-----Hello lazy person... Answer the following prompts to get a nice and professional README.md-----`
  );

  inquirer.prompt(questions).then((readmeData) => {
    writeToFile("./lazybones/README.md", generateMarkdown(readmeData));
  });
}

init();
