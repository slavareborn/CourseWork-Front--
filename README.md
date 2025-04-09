# Sniff Frontend

## Quick Description
The **Sniff Frontend** is a web-based application developed with **TypeScript**, **NextJS**, **Styled Components**, **Material UI**, **React Forms** and **Redux Toolkit**. This application allows users to search for pets available for adoption, register, and log in, and contact pet owners via a secure, user-friendly interface.

---

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Directory Structure](#directory-structure)
- [Contribution Guidelines](#contribution-guidelines)
- [Branch Naming Conventions and Commit Message Guidelines](#branch-naming-conventions-and-commit-message-guidelines)

Use [GitHub - ekalinin/github-markdown-toc](https://github.com/ekalinin/github-markdown-toc) to automatically generate the Table of Contents based on the document structure.

---

## Prerequisites
Before you begin, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/) (v20.11.0) you can see in .nvmrc file
- [npm](https://www.npmjs.com/) for dependency management (v10.8.2)
- [Typescript](https://www.typescriptlang.org/) 
- [NextJS CLI](https://nextjs.org/)

---

## Installation Guide

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/LearnOn4/sniff-fe
   cd sniff-fe
   ```

2. Install dependencies:

```npm install```

3. Set up environment variables (see [Configuration](#configuration)).

4. Build the project:

```npm run build```

#   Configuration
To configure the application, you need to set up the environment variables. Create a .env file in the root directory and add the following variables:

```REACT_APP_API_URL=your_backend_api_url```

For more detailed configuration settings, refer to the .env.example file included in the project.

Running the Project

After configuring the environment variables, run the project locally using the following command:

```npm start```

This will start the application on http://localhost:3000.

# Testing
To run tests for the project:

1. Unit tests:

```npm test```

2. To run tests in watch mode:

```npm run test:watch```

For detailed test configurations, refer to the tests folder and configuration in jest.config.js.

# Directory Structure

The following is a brief explanation of the project's folder structure:

```
sniff-fe/
│
├── src/                      # Main source code folder
    ├── components/           # Reusable UI components (styled with Styled Components)
    ├── pages/                # Page components
    ├── store/                # Redux Toolkit store setup and slices
    ├── services/             # API service calls (NestJS, Axios, etc.)
    ├── hooks/                # Custom React hooks
    ├── styles/               # Global styles, themes, Material UI overrides
    └── utils/                # Helper functions, utilities
│
├── public/                   # Static assets (index.html, images, etc.)
├── tests/                    # Unit and integration tests
├── .env.example              # Example environment file
├── jest.config.js            # Jest configuration
└── package.json              # Project manifest file with dependencies
```

# Contribution Guidelines

We welcome contributions from the team! Follow these steps to work with the repository:

## Workflow:

1. **Create a new branch:**
   - Before starting your work, ensure your local `main` branch is up to date:
     ```bash
     git checkout main
     git pull origin main
     ```

   - Create a new branch from `main`:
     ```bash
     git checkout -b <branch-name>
     ```

   - The branch name should follow the [branch naming conventions](#branch-naming-convention).

2. **Make your changes:**
   - Make the necessary changes in your branch.
   - Once your changes are ready, commit them:
     ```bash
     git add .
     git commit -m "<commit-message>"
     ```

   - The commit message should follow the [commit naming conventions](#commit-naming-convention).

3. **Push your changes:**
   - Push your branch to the remote repository:
     ```bash
     git push origin <branch-name>
     ```


4. **Create a Pull Request:**
   - Once your branch is pushed, create a pull request (PR) to the `main` branch.
   - Be sure to assign reviewers from the team to review your PR.

5. **Address feedback:**
   - Address any feedback from the reviewers.
   - Once all feedback is resolved and approvals are obtained, the pull request can be merged.

---

## Branch Naming Convention:
- Use the following naming convention for branches:
  - ```feature/<short-description>```: For new features
  - ```bugfix/<short-description>```: For bug fixes
  - ```hotfix/<short-description>```: For urgent fixes

Examples:
```bash
feature/add-user-authentication
bugfix/fix-login-issue
```