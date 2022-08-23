var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Please Provide Your Projects Name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please Provide Your Projects Name');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Please Describe Your Project:",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please Describe Your Project');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "install",
      message: "Briefly Describe Installation Process For Your Project",
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please Briefly Describe Installation Process For Your Project');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "usage",
      message: "Please Provide Instructions To Use Your Project",
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please Provide Instructions To Use Your Project"');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "Contribute",
      message: "Describe Any Possible Future Contributions",
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter a brief description of how to test your application.',
    },
    {
      type: "list",
      name: "license",
      message: "Please Select The Applicable License",
      choices: ["MIT", "Apache 2.0", "MPL 2.0", "Boost", "GPL v3", "None"],
      validate: Input => {
        if (Input) {
          return true;
        } else {
          console.log('Please make a selection');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please Provide Your Email',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter a valid email address!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'Please Provide Your GitHub UserName',
        validate: githubUserNameInput => {
          if (githubUserNameInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        }
    },
  ])
  .then((response) => {
    console.log(response);
    const README = generateMarkdown(response);

    fs.writeFile("README.md", README, (err) => {
      err ? console.error(err) : console.log("Success");
    });
  });