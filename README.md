# Employee Database Project

This project is a simple employee database system built using React for the frontend and Express.js with MySQL for the backend. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on employee records stored in a MySQL database. Below, you'll find instructions on setting up and running the project.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new employees with their names.
- Retrieve a list of all employees.
- Retrieve employee details by ID or name.
- Update employee names.
- Delete employees by ID or name.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/employee-database.git
Change to the project directory:

shell
Copy code
cd employee-database
Install the backend dependencies:

shell
Copy code
npm install
Navigate to the frontend directory and install the frontend dependencies:

shell
Copy code
cd frontend
npm install
Create a MySQL database and configure the database connection in the config.js file in the backend directory:

javascript
Copy code
// backend/config.js
module.exports = {
  user_name: 'your_username',
  password: 'your_password',
  database_name: 'your_database_name',
};
Create the necessary database table using the provided SQL schema in database.sql.

Return to the root directory and start both the backend and frontend:

shell
Copy code
cd ..
npm run dev
Access the application in your web browser at http://localhost:3000.

Project Structure
The project is structured into two main parts:

backend: Contains the Express.js application, responsible for handling API requests and interacting with the MySQL database.
frontend: Contains the React application, responsible for the user interface.
API Endpoints
The backend provides the following API endpoints:

POST /create: Create a new employee record.
GET /employees: Retrieve a list of all employees.
GET /employees/:idOrName: Retrieve employee details by ID or name.
PUT /employees/:idOrName: Update an employee's name by ID or name.
DELETE /employees/:idOrName: Delete an employee by ID or name.
Frontend
The frontend is built using React and communicates with the backend through API requests. You can access the frontend at http://localhost:3000.

Technologies Used
Frontend:

React
Axios (for API requests)
CSS for styling
Backend:

Express.js
MySQL for data storage
Cors (for handling cross-origin requests)
Contributing
Contributions to this project are welcome. Feel free to open issues and pull requests to suggest improvements or report bugs.

License
This project is licensed under the MIT License.
