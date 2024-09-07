# Asset Finance Management Platform

## Overview

This project is a full-stack application for managing finance applications. It includes a frontend built with React and a backend developed with Node.js and Express. The application integrates with a MongoDB serverless cluster for data storage.

## Table of Contents

1. [Requirements](#requirements)
2. [Setup](#setup)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
5. [Deployment](#deployment)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Unit Testing](#unit-testing)
8. [Contributing](#contributing)
9. [License](#license)

## Requirements

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB Atlas (serverless cluster)
- Git

## Setup

### Backend Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/FinanceApp.git
    cd FinanceApp
    ```

2. **Navigate to the Backend Directory**

    ```bash
    cd Backend
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Set Up Environment Variables**

    Create a `.env` file in the `Backend` directory with the following content:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=4000
    ```

    Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

5. **Run the Backend Server**

    ```bash
    node server.js
    ```

    The backend server will start on `http://localhost:4000`.

### Frontend Setup

1. **Navigate to the Frontend Directory**

    ```bash
    cd ../FinanceAss
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run the Frontend Application**

    ```bash
    npm start
    npm run dev
    ```

    The frontend application will start on `http://localhost:3000`.

## Running the Application

1. **Start Backend**

    Make sure the backend server is running at `http://localhost:4000`.

2. **Start Frontend**

    Ensure the frontend application is running at `http://localhost:3000`.

3. **Access the Application**

    Open your browser and go to `http://localhost:3000` to interact with the application.

## API Endpoints

- **GET /application**: Retrieve all finance applications.
- **POST /application**: Create a new finance application.
- **PUT /application/:id**: Update an existing finance application.
- **DELETE /application/:id**: Delete a finance application.



For deployment instructions, please refer to the [Deployment](#deployment) section.
