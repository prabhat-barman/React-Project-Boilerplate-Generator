# React Project Boilerplate Generator

This npm package helps you create a new React project with a predefined folder structure. It allows you to choose between JavaScript and TypeScript, and provides options for using either standard CSS or Tailwind CSS. You can also select between a basic or advanced folder structure.

## Installation

First, make sure you have Node.js and npm installed on your machine. Then, install the package globally:


npm install -g react-project-boilerplate-generator

## Usage

Run the package using the following command:


create-react-boilerplate


You will be prompted to provide the following information:

1. **Project Name**: The name of your new React project.
2. **Language Type**: Choose between JavaScript and TypeScript.
3. **App Type**: Select between a basic or advanced folder structure.
4. **CSS Type**: Choose between standard CSS or Tailwind CSS.

Based on your choices, the package will create a new React project with the specified configurations.

## Folder Structure

### Basic

If you choose the basic folder structure, the `src` folder will look like this:

src/
├── assets/
│   ├── images/
│   └── styles/
│       └── global.css
├── components/
│   ├── Common/
│   └── SpecificComponent/
├── hooks/
├── services/
├── utils/
├── App.js
├── index.js
└── App.css

### Advanced

If you choose the advanced folder structure, the `src` folder will look like this:

src/
├── assets/             # Static assets like images, fonts, etc.
├── components/         # Atomic Design components
│   ├── atoms/          # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── molecules/      # Combinations of atoms
│   │   ├── FormField.tsx
│   │   ├── NavbarItem.tsx
│   │   └── ...
│   ├── organisms/      # Complex components made up of molecules and/or atoms
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── templates/      # Page templates
│   │   ├── MainTemplate.tsx
│   │   └── ...
│   └── pages/          # Actual pages
│       ├── Home.tsx
│       ├── About.tsx
│       └── ...
├── hooks/              # Custom hooks
│   ├── useFetch.ts
│   └── ...
├── layouts/            # Layout components
│   ├── MainLayout.tsx
│   └── ...
├── services/           # API calls and business logic
│   ├── apiClient.ts
│   └── ...
├── styles/             # Global styles and Tailwind CSS configuration
│   ├── tailwind.css
│   └── ...
├── types/              # Global TypeScript types
│   ├── index.ts
│   └── ...
├── utils/              # Utility functions
│   ├── helpers.ts
│   └── ...
├── App.tsx             # Main App component
├── index.tsx           # Entry point
└── ...


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## Author

Prabhat Barman

## Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/)
- [ShellJS](https://github.com/shelljs/shelljs)

