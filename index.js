// index.js

const { exec } = require("shelljs");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Function to create a new React project with Create React App
const createReactApp = (projectName, isTypeScript) => {
  const templateOption = isTypeScript ? "--template typescript" : "";
  exec(`npx create-react-app ${projectName} ${templateOption}`);
};

// Function to install Tailwind CSS
const installTailwindCSS = (projectName) => {
  exec(
    `cd ${projectName} && npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
  );
  exec(`cd ${projectName} && npx tailwindcss init -p`);
};

// Function to create a basic folder structure inside src
const createBasicSrcFolderStructure = (projectName) => {
  const srcPath = path.join(process.cwd(), projectName, "src");

  // Create assets folder
  const assetsPath = path.join(srcPath, "assets");
  fs.mkdirSync(assetsPath, { recursive: true });

  // Create images folder inside assets
  const imagesPath = path.join(assetsPath, "images");
  fs.mkdirSync(imagesPath, { recursive: true });

  // Create styles folder inside assets and global.css file
  const stylesPath = path.join(assetsPath, "styles");
  fs.mkdirSync(stylesPath, { recursive: true });
  fs.writeFileSync(path.join(stylesPath, "global.css"), "");

  // Create components folder and its subfolders
  const componentsPath = path.join(srcPath, "components");
  fs.mkdirSync(componentsPath, { recursive: true });
  const commonPath = path.join(componentsPath, "Common");
  fs.mkdirSync(commonPath, { recursive: true });
  const specificComponentPath = path.join(componentsPath, "SpecificComponent");
  fs.mkdirSync(specificComponentPath, { recursive: true });

  // Create hooks, services, and utils folders
  fs.mkdirSync(path.join(srcPath, "hooks"), { recursive: true });
  fs.mkdirSync(path.join(srcPath, "services"), { recursive: true });
  fs.mkdirSync(path.join(srcPath, "utils"), { recursive: true });

  // Create App.js, index.js, and App.css files
  fs.writeFileSync(path.join(srcPath, "App.js"), ""); // You can add content here if needed
  fs.writeFileSync(path.join(srcPath, "index.js"), ""); // You can add content here if needed
  fs.writeFileSync(path.join(srcPath, "App.css"), ""); // You can add content here if needed
};

// Function to create an advanced folder structure inside src
const createAdvancedSrcFolderStructure = (projectName) => {
  const srcPath = path.join(process.cwd(), projectName, "src");

  // Create assets folder
  const assetsPath = path.join(srcPath, "assets");
  fs.mkdirSync(assetsPath, { recursive: true });

  // Create components folder and its subfolders
  const componentsPath = path.join(srcPath, "components");
  fs.mkdirSync(componentsPath, { recursive: true });
  const atomsPath = path.join(componentsPath, "atoms");
  fs.mkdirSync(atomsPath, { recursive: true });
  const moleculesPath = path.join(componentsPath, "molecules");
  fs.mkdirSync(moleculesPath, { recursive: true });
  const organismsPath = path.join(componentsPath, "organisms");
  fs.mkdirSync(organismsPath, { recursive: true });
  const templatesPath = path.join(componentsPath, "templates");
  fs.mkdirSync(templatesPath, { recursive: true });
  const pagesPath = path.join(componentsPath, "pages");
  fs.mkdirSync(pagesPath, { recursive: true });

  // Create hooks folder
  const hooksPath = path.join(srcPath, "hooks");
  fs.mkdirSync(hooksPath, { recursive: true });

  // Create layouts folder
  const layoutsPath = path.join(srcPath, "layouts");
  fs.mkdirSync(layoutsPath, { recursive: true });

  // Create services folder
  const servicesPath = path.join(srcPath, "services");
  fs.mkdirSync(servicesPath, { recursive: true });

  // Create styles folder
  const stylesPath = path.join(srcPath, "styles");
  fs.mkdirSync(stylesPath, { recursive: true });

  // Create types folder
  const typesPath = path.join(srcPath, "types");
  fs.mkdirSync(typesPath, { recursive: true });

  // Create utils folder
  const utilsPath = path.join(srcPath, "utils");
  fs.mkdirSync(utilsPath, { recursive: true });

  // Create App.tsx and index.tsx files
  const fileExtension = srcPath.includes("typescript") ? "ts" : "js";
  fs.writeFileSync(path.join(srcPath, `App.${fileExtension}x`), ""); // You can add content here if needed
  fs.writeFileSync(path.join(srcPath, `index.${fileExtension}x`), ""); // You can add content here if needed
};

// Main function to prompt user and create project
const main = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Enter the project name:",
      },
      {
        type: "list",
        name: "languageType",
        message: "Choose the language type:",
        choices: ["JavaScript", "TypeScript"],
      },
      {
        type: "list",
        name: "appType",
        message: "Which type of app are you working with?",
        choices: ["Basic", "Advanced"],
      },
      {
        type: "list",
        name: "cssType",
        message: "Choose the CSS type:",
        choices: ["CSS", "Tailwind"],
      },
    ]);

    const isTypeScript = answers.languageType === "TypeScript";
    const projectName = answers.projectName;

    // Create React app
    createReactApp(projectName, isTypeScript);

    if (answers.cssType === "Tailwind") {
      installTailwindCSS(projectName);
    }

    if (answers.appType === "Basic") {
      createBasicSrcFolderStructure(projectName);
    } else if (answers.appType === "Advanced") {
      createAdvancedSrcFolderStructure(projectName);
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
module.exports = main;
