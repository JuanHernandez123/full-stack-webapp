# Full-Stack Web Application

## Project Overview

This project is a full-stack web application that allows users to manage pet information. It includes a React frontend, a Node.js/Express backend, and a MongoDB database. The application supports CRUD operations (Create, Read, Update, Delete) for pet information.

## Features

- **WebApp:** A React application with a form to collect pet information and a table to display the list of pets.
- **API:** A Node.js/Express API to handle CRUD operations for pet information.
- **Database:** A MongoDB database to store pet information.
- **Automation Framework:** (To be implemented) Automated tests for the web application and API.
- **CI/CD:** (To be implemented) Jenkins integration for continuous integration and deployment.
- **Containers:** (To be implemented) Docker integration for containerization.

## Prerequisites

- Node.js (v20.19.0 or later)
- npm (v10.2.4 or later)
- MongoDB (running locally)

## Project Structure

```
full-stack-webapp/
├── api/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── webapp/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo/full-stack-webapp.git
cd full-stack-webapp
```

### 2. Set Up the API

1. Navigate to the `api` directory:

```sh
cd api
```

2. Install dependencies:

```sh
npm install
```

3. Start the API server:

```sh
npm start
```

You should see:

```
Connected to MongoDB
Server is running on port 3001
```

### 3. Set Up the WebApp

1. Open a new terminal and navigate to the `webapp` directory:

```sh
cd ../webapp
```

2. Install dependencies:

```sh
npm install
```

3. Start the React development server:

```sh
npm start
```

The React app should automatically open in your default browser at `http://localhost:3000`.

### 4. Verify the Application

- Open your browser and navigate to `http://localhost:3000`.
- You should see the pet information form and the list of pets.
- Use the form to add new pets and see them displayed in the table.
- Use the delete button to remove pets from the list.

## Troubleshooting

- Ensure MongoDB is running locally.
- If you encounter issues with the integrated terminal in VS Code, try using an external terminal.
- Verify that the Node.js and npm versions are correct by running `node --version` and `npm --version`.

## Future Enhancements

- Add edit functionality to update existing pets.
- Implement sorting and filtering for the table.
- Add loading states and better error handling.
- Set up automated tests for the web application and API.
- Integrate Jenkins for CI/CD.
- Containerize the application using Docker.

## License

This project is licensed under the MIT License.