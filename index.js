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

const startMenu = () => {

  inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "How would you like to proceed?",
    choices: [
      "View All Employees?",
      "View All Employee's By Roles?",
      "View all Emplyees By Deparments",
      "Update Employee",
      "Add Employee?",
      "Add Role?",
      "Add Department?",
      "EXIT"
    ]
  }])
    .then(function (value) {
      switch (value.choice) {
        // TODO come back and add switch statement
        case "View All Employees?":
          viewAllEmployees();
          break;
          
      }
    })
}

const viewAllEmployees = () => {

  let view = "SELECT * FROM employee";
  connection.query(view, function(err, res) {
    if (err) throw err;
    console.table("All Employees:", res);
    startMenu();
  })
}







// Connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // Run the startMenu function after the connection is made to prompt the user
  startMenu();
});
