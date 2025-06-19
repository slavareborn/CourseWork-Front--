# Doctors's Site Frontend

## Quick Description
The **Doctors's Site Frontend** is a web-based application developed with **TypeScript**, **NextJS**, **Styled Components**, **Material UI** and **Redux Toolkit**. This application will allow users to search for doctors in hospitals in the cities, but now users can signin or signup to our site.

---

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)

---

## Prerequisites
Before you begin, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/) (v20.17.0) you can see in .nvmrc file
- [npm](https://www.npmjs.com/) for dependency management (v10.8.2)
- [Typescript](https://www.typescriptlang.org/) 
- [NextJS CLI](https://nextjs.org/)

---

## Installation Guide

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/slavareborn/CourseWork-Front--.git
   cd CourseWork-Front
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