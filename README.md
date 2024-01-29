# Employee_Database
# Employee Database Project

This project is a simple employee database system built using React for the frontend and Express.js with MySQL for the backend. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on employee records stored in a MySQL database. Below, you'll find instructions on setting up and running the project.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation) 
- [Project Structure](#project-structure)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
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
2. Change to the project directory:

   ```shell
   cd employee-database
3. Install the backend dependencies:

   ```shell
   npm install
4. Navigate to the frontend directory and install the frontend dependencies:

   ```shell
   cd frontend
   npm install
5. Create a MySQL database and configure the database connection in the config.js file in the backend directory:

   ```javascript
   // backend/config.js
   module.exports = {
   user_name: 'your_username',
   password: 'your_password',
   database_name: 'your_database_name',
   };
6. Create the necessary database table using the provided SQL schema in database.sql.

7. Return to the root directory and start both the backend and frontend:

   ```shell
   cd ..
   npm run dev
8. Access the application in your web browser at http://localhost:3000.

### Project Structure
The project is structured into two main parts:

### Backend: 
Contains the Express.js application, responsible for handling API requests and interacting with the MySQL database.
### Frontend: 
Contains the React application, responsible for the user interface.
### API Endpoints
The backend provides the following API endpoints:

POST /create: Create a new employee record.  
GET /employees: Retrieve a list of all employees.  
GET /employees/:idOrName: Retrieve employee details by ID or name.  
PUT /employees/:idOrName: Update an employee's name by ID or name.  
DELETE /employees/:idOrName: Delete an employee by ID or name.  

  
The frontend is built using React and communicates with the backend through API requests. You can access the frontend at http://localhost:3000.

### Technologies Used

**Frontend:**
- React
- Fetch (for API requests)
- CSS for styling

**Backend:**
- Express.js
- MySQL for data storage
- Cors (for handling cross-origin requests)  
### Contributing
Contributions to this project are welcome. Feel free to open issues and pull requests to suggest improvements or report bugs.

# License
This project is licensed under the MIT License.
