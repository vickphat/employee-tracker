const inquirer = require("inquirer")
const mysql = require("mysql")
const consoleTable = require("console.table")

// Creates the connection to the SQL database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employees_DB',
  });