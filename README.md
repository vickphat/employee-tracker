# EMPLOYEE TRACKER VIA COMMAND-LINE

![LICENSE](https://img.shields.io/badge/License-[MIT]-blue?style=for-the-badge&logo=appveyor.svg)<br>
![JS](https://img.shields.io/badge/JavaScript-100%25-yellow?style=for-the-badge&logo=appveyor.svg)<br>
![NODE](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=appveyor.svg)<br>
![MYSQL](https://img.shields.io/badge/MYSQL.js-blue?style=for-the-badge&logo=appveyor.svg)<br>
![INQUIRER](https://img.shields.io/badge/Inquirer.js-blue?style=for-the-badge&logo=appveyor.svg)

# Table of Contents 

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Demo](#demo)
5. [Questions](#questions)

## Acceptance Criteria:

For this homework assignment, I was task with creating an employee tracker via command-line application.
The following is the acceptance criteria for this homework:

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL. Design the following database schema containing three tables:

    department:

        * id - INT PRIMARY KEY
        * name - VARCHAR(30) to hold department name

    role:

        * id - INT PRIMARY KEY
        * title -  VARCHAR(30) to hold role title
        * salary -  DECIMAL to hold role salary
        * department_id -  INT to hold reference to department role belongs to

    employee:

        * id - INT PRIMARY KEY
        * first_name - VARCHAR(30) to hold employee first name
        * last_name - VARCHAR(30) to hold employee last name
        * role_id - INT to hold reference to role employee has
        * manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

## Description:
For this project, I was task of creating an employee tracker by creating a command-line application. For this to be successful, I had to use the following NPM packages:

    * MySQL NPM package to connect to your MySQL database and perform queries.
    * Inquirer NPM package to interact with the user via the command-line.
    * console.table to print MySQL rows to the console

In this command-line application, the user will be able to track current employees. The user will be able to do the following: 

    * View All Employees
    * View All Employees By Roles
    * View all Employees By Departments
    * Update Employee
    * Add Employee
    * Add Role
    * Add Department

## Installation:
To run this application, the following installs will be required:

    * Node.js
    * npm init
    * node_modules(npm i)
    * npm install inquirer
    * npm install mysql
    * npm console.table

## Usage:
This project is intended to be used to keep track of employees by various ways. The user will also be able to add employees, roles or departments. The user will also be able to update roles for employees. To use the application, the user will have to open up a terminal and navigate to the correct directory where the files are located. From there, they would just have to enter "node index.js" or "npm start". 

## Demo:
The following link is a video that will showcase how to run the application.
<img src = https://github.com/vickphat/employee-tracker/blob/master/images/employeeTracker.JPG>

* https://www.youtube.com/watch?v=3UkXT0a_N9o

## Questions: 
If there are any questions that you may have, please contact me by the following:

* Github: https://github.com/vickphat
* Email: vickphat@gmail.com 
