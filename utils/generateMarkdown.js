// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseText(projectLicense) {
  let insert = projectLicense;
  if (projectLicense !== "None") {
    return `## License
  This project is licensed under`;
  } else {
    return "";
  }
}
function renderLicenseBadge(projectLicense) {
  if (projectLicense !== "None") {
    return `![License](https://img.shields.io/badge/License-${projectLicense}-blue.svg)
     `;
  } else {
    return "";
  }
}

function renderLicenseLink(projectLicense) {
  if (projectLicense !== "None") {
    return `[More Info](https://choosealicense.com/licenses/)`;
  } else {
    return "";
  }
}

function renderInstallation(projectInstallation) {
  if (projectInstallation !== "") {
    return `## Project-Installation-Instructions
  ${projectInstallation}`;
  } else {
    return "";
  }
}

function renderUsage(projectUsage) {
  if (projectUsage !== "") {
    return `## Project-Usage-Instructions
  ${projectUsage}`;
  } else {
    return "";
  }
}

function renderCollabList(projectCollabVerify, projectCollabList) {
  if (projectCollabVerify == true) {
    let collabStr = "";
    let collab = projectCollabList.split(",").map(function (item) {
      return item.trim();
    });
    for (i = 0; i < collab.length; i++) {
      collabStr +=
        "[" + collab[i] + "](https://github.com/" + collab[i] + ")    ";
    }
    return `## Project-Collaborators
    ${collabStr}`;
  } else {
    return "";
  }
}

function renderFeatures(projectFeatures) {
  if (projectFeatures !== "") {
    return `## Project-Features
  ${projectFeatures}`;
  } else {
    return "";
  }
}

function renderContrib(projectContribVerify, projectContribInstruct) {
  if (projectContribVerify == true) {
    return `## Contribution-Guidelines
  ${projectContribInstruct}`;
  } else {
    return "";
  }
}

function renderTest(projectTest) {
  if (projectTest !== "") {
    return `## Project-Testing-Instructions
  ${projectTest}`;
  } else {
    return "";
  }
}

function renderIMG(projectIMG) {
  if (projectIMG !== "") {
    return `## Project-Snapshot
![Project Snapshot](${projectIMG})`;
  } else {
    return "";
  }
}

function renderTableOfContents(
  projectInstallation,
  projectUsage,
  projectCollabVerify,
  projectFeatures,
  projectContribVerify,
  projectTest,
  projectIMG,
  projectLicense
) {
  let TOC = '';
  if (projectInstallation !== "") {
    TOC += "* [Installation Instructions](#Project-Installation-Instructions)\n";
  }
  if (projectUsage !== "") {
    TOC += "* [Installation Instructions](#Project-Usage-Instructions)\n";
  }
  if (projectCollabVerify == true) {
    TOC += "* [Installation Instructions](#Project-Collaborators)\n";
  }
  if (projectFeatures !== "") {
    TOC += "* [Installation Instructions](#Project-Features)\n";
  }
  if (projectContribVerify == true) {
    TOC += "* [Installation Instructions](#Contribution-Guidelines)\n";
  }
  if (projectTest !== "") {
    TOC += "* [Installation Instructions](#Project-Testing-Instructions)\n";
  }
  if (projectIMG !== "") {
    TOC += "* [Installation Instructions](#Project-Snapshot)\n";
  }
  if (projectLicense !== "") {
    TOC += "* [Installation Instructions](#License)";
  }
  return `## Table Of Contents
${TOC}`;
}
// ## Table of Contents
// * [Installation](#installation)
// * [Usage](#installation)
// * [Credits](#installation)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
### Created by: ${data.name} | [Github](https://github.com/${
    data.name
  }) | Email: ${data.email}
## Description
${data.projectDescription}
${renderTableOfContents(
  data.projectInstallation,
  data.projectUsage,
  data.projectCollabVerify,
  data.projectFeatures,
  data.projectContribVerify,
  data.projectTest,
  data.projectIMG,
  data.projectLicense
)}
${renderInstallation(data.projectInstallation)}
${renderUsage(data.projectUsage)}
${renderCollabList(data.projectCollabVerify, data.projectCollabList)}
${renderFeatures(data.projectFeatures)}
${renderContrib(data.projectContribVerify, data.projectContribInstruct)}
${renderTest(data.projectTest)}
${renderIMG(data.projectIMG)}
${renderLicenseText(data.projectLicense)}
${renderLicenseBadge(data.projectLicense)}
${renderLicenseLink(data.projectLicense)}
`;
}

module.exports = { generateMarkdown };
