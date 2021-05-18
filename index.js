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

// Command-line prompts
const startMenu = () => {

  inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "How would you like to proceed?",
    choices: [
      "View All Employees",
      "View All Employee's By Roles",
      "View all Emplyees By Deparments",
      "Update Employee",
      "Add Employee",
      "Add Role",
      "Add Department",
      "EXIT"
    ]
  }])
    .then((data) => {
      switch (data.choice) {
        // Switch statement to cycle through users choices in command-line
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Employee's By Roles":
          viewRoles();
          break;
        case "View all Emplyees By Deparments":
          viewDepartments();
          break;
        case "Update Employee":
          updateEmployee();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "EXIT":
          exit();
          break;
        default:
          break;
      }
    });
};

const viewAllEmployees = () => {

  let data = "SELECT * FROM employee";
  connection.query(data, (err, res) => {
    if (err) throw err;
    console.table("All Employees:", res);
    startMenu();
  });
};







// Connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // Run the startMenu function after the connection is made to prompt the user with choices
  startMenu();
});
