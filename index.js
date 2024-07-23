// index.js
const { exec } = require("shelljs");
const path = require("path");
const fs = require("fs");
const { default: inquirer } = require("inquirer");

// Function to create a new React project with Create React App
const createReactApp = (projectName) => {
  exec(`npx create-react-app ${projectName}`);
};

// Function to create a folder structure inside src
const createSrcFolderStructure = (projectName) => {
  const srcPath = path.join(process.cwd(), projectName, "src");

  // Create assets folder
  const assetsPath = path.join(srcPath, "assets");
  fs.mkdirSync(assetsPath, { recursive: true });

  // Create components folder
  const componentsPath = path.join(srcPath, "components");
  fs.mkdirSync(componentsPath, { recursive: true });

  // Create pages folder
  const pagesPath = path.join(srcPath, "pages");
  fs.mkdirSync(pagesPath, { recursive: true });

  // Create styles folder
  const stylesPath = path.join(srcPath, "styles");
  fs.mkdirSync(stylesPath, { recursive: true });

  // Create App.css file inside styles folder
  const appCssPath = path.join(stylesPath, "App.css");
  fs.writeFileSync(appCssPath, ""); // You can add content here if needed
};

// Main function to prompt user and create project
const main = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "appType",
        message: "Which type of app are you working with?",
        choices: ["Basic", "Advanced"],
      },
      {
        type: "input",
        name: "projectName",
        message: "Enter the project name:",
        when: (answers) => answers.appType === "Basic",
      },
      {
        type: "list",
        name: "cssType",
        message: "Choose the CSS type:",
        choices: ["CSS", "Tailwind"],
        when: (answers) => answers.appType === "Basic",
      },
    ]);

    if (answers.appType === "Basic") {
      // Create React app
      createReactApp(answers.projectName);

      // If Tailwind CSS is chosen, install Tailwind and create src/assets folder
      if (answers.cssType === "Tailwind") {
        exec(
          `cd ${answers.projectName} && npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
        );
        exec(`cd ${answers.projectName} && npx tailwindcss init -p`);
        createSrcFolderStructure(answers.projectName);
      }
    } else {
      console.log("Advanced setup not yet supported.");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

main();
