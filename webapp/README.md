# Full-Stack Web Application

## Project Overview

This project is a full-stack web application that allows users to manage pet information. It includes:
- **React Frontend:** A user interface for managing pet data.
- **Node.js API:** A backend API for handling CRUD operations.
- **MongoDB Database:** A database for storing pet information.
- **Dockerized Environment:** The entire application is containerized using Docker and managed with Docker Compose.

---

## Features

- **Frontend:** A React app with a form to add/update pets and a table to display the list of pets.
- **Backend:** A Node.js/Express API to handle CRUD operations.
- **Database:** A MongoDB database to store pet information.
- **Docker:** All services (frontend, backend, and database) are containerized and managed with Docker Compose.

---

## Prerequisites

Before running the project, ensure you have the following installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/) (only required if running locally without Docker)

---

## Getting Started

### **1. Clone the Repository**
```bash
git clone https://github.com/your-repo/full-stack-webapp.git
cd full-stack-webapp
```

---

### **2. Run the Application with Docker**

1. **Build and Start the Containers:**
   - Navigate to the project root directory (where `docker-compose.yml` is located):
     ```bash
     cd c:\Automation_Projects\full-stack-webapp
     ```
   - Build and start the containers:
     ```bash
     docker-compose up --build
     ```

2. **Access the Application:**
   - **Frontend:** Open your browser and go to `http://localhost:3000`.
   - **API:** Use Postman or your browser to access the API at `http://localhost:3001`.

3. **Stop the Containers:**
   - To stop all running containers:
     ```bash
     docker-compose down
     ```

---

### **3. Run the Application Locally (Without Docker)**

If you prefer to run the application locally without Docker, follow these steps:

#### **Run the MongoDB Database**
1. Install and start MongoDB locally.
2. Ensure MongoDB is running on `mongodb://localhost:27017`.

#### **Run the API**
1. Navigate to the `api` directory:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the API:
   ```bash
   npm start
   ```
4. The API will be available at `http://localhost:3001`.

#### **Run the Frontend**
1. Navigate to the `webapp` directory:
   ```bash
   cd webapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
4. The frontend will be available at `http://localhost:3000`.

---

## Project Structure

```
full-stack-webapp/
├── api/                # Backend API
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.ts
│   ├── Dockerfile       # Dockerfile for the API
│   ├── package.json
│   └── tsconfig.json
├── webapp/             # Frontend React App
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.tsx
│   ├── Dockerfile       # Dockerfile for the frontend
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml   # Docker Compose configuration
└── README.md            # Project documentation
```

---

## Troubleshooting

### **Common Docker Commands**
- **List Running Containers:**
  ```bash
  docker ps
  ```
- **View Logs for All Services:**
  ```bash
  docker-compose logs -f
  ```
- **Stop All Containers:**
  ```bash
  docker-compose down
  ```
- **Rebuild and Restart Containers:**
  ```bash
  docker-compose up --build
  ```

### **API Not Connecting to MongoDB**
- Ensure the `MONGO_URI` environment variable in `docker-compose.yml` is set to:
  ```yaml
  MONGO_URI=mongodb://mongo:27017/pets
  ```
- Check the logs for the API container:
  ```bash
  docker-compose logs api
  ```

---

## Future Enhancements

- **Sorting and Filtering:** Add sorting and filtering functionality to the frontend.
- **Error Handling:** Improve error handling in the API and frontend.
- **CI/CD Pipeline:** Automate the build and deployment process using Jenkins.
- **Automated Tests:** Add unit and integration tests for the API and frontend.

---

## License

This project is licensed under the MIT License.