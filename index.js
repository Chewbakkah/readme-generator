// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");
const answerData = [];

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "warning",
        message: "Skipped Questions Will Render No Output! -PRESS ENTER-",
      },
      {
        type: "input",
        name: "name",
        message: "What is your GitHub username? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "projectTitle",
        message: "What is your project title? (Required)",
        validate: (projectTitle) => {
          if (projectTitle) {
            return true;
          } else {
            console.log("Please enter your project title!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Enter project description: (Required)",
        validate: (projectDescription) => {
          if (projectDescription) {
            return true;
          } else {
            console.log("Please enter your project description!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "projectInstallation",
        message: "Enter project installation instructions:",
      },
      {
        type: "input",
        name: "projectUsage",
        message: "Enter instructions on how to use your project:",
      },
      {
        type: "confirm",
        name: "projectCollabVerify",
        message: "Did your project have collaborators?",
        default: false,
      },
      {
        type: "input",
        name: "projectCollabList",
        message:
          "Enter project collaborators: (GITHUB USERNAMES Seperate with commas)",
        when: ({ projectCollabVerify }) => projectCollabVerify,
      },
      {
        type: "list",
        name: "projectLicense",
        message: "Which license applies to your project? ",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        name: "projectFeatures",
        message: "Enter project highlights:",
      },
      {
        type: "confirm",
        name: "projectContribVerify",
        message: "Is your project open to outside contributers?",
        default: false,
      },
      {
        type: "input",
        name: "projectContribInstruct",
        message: "Enter project contribution guidelines:",
        when: ({ projectContribVerify }) => projectContribVerify,
      },
      {
        type: "input",
        name: "projectTest",
        message: "Enter instructions for available project tests:",
      },
      {
        type: "input",
        name: "projectIMG",
        message: "Enter relative filepath to project IMG:",
      },
    ])
    .then((data) => {
      console.log(data);
      answerData.push(data);
      const {
        name,
        email,
        projectTitle,
        projectDescription,
        projectInstallation,
        projectUsage,
        projectCollabVerify,
        projectCollabList,
        projectLicense,
        projectFeatures,
        projectContribVerify,
        projectContribInstruct,
        projectTest,
        projectIMG,
      } = answerData[0];

      generateMarkdown(data);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptQuestions();
}

// Function call to initialize app
init();
