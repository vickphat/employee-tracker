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

// Connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // Run the startMenu function after the connection is made to prompt the user with choices
  startMenu();
});

// Command-line prompts
const startMenu = () => {

  inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "How would you like to proceed?",
    choices: [
      "View All Employees",
      "View All Employees By Roles",
      "View all Employees By Departments",
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
        case "View All Employees By Roles":
          viewRoles();
          break;
        case "View all Employees By Departments":
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

// Function to view all employees 
const viewAllEmployees = () => {

  let data = "SELECT * FROM employee LEFT JOIN role ON role_id = role.id;";
  connection.query(data, (err, res) => {

    if (err) throw err;
    console.table("All Employees:", res);
    startMenu();
  });
};

// Function to view all employees by roles
const viewRoles = () => {

  let data = "SELECT * FROM role LEFT JOIN employee ON role.id = role_id;";
  connection.query(data, (err, res) => {

    if (err) throw err;
    console.table("All Roles:", res);
    startMenu();
  });
};

// Function to view all employees by departments
const viewDepartments = () => {

  let data = "SELECT * FROM department LEFT JOIN role ON department_id = department.id LEFT JOIN employee ON role_id = role.id;";
  connection.query(data, (err, res) => {

    if (err) throw err;
    console.table("All Departments:", res);
    startMenu();
  });
};

// Function to update employee role
const updateEmployee = () => {
  inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Please enter employee's ID number",
    }
  ])
  .then((answer) => {

    const ID = answer.id
    inquirer.prompt([
      {
        name: "roleId",
        type: "input",
        message: "Please enter the role id",
      }
    ])
    .then((answer) => {

      const employeeRoleID = answer.roleId
      let data = "UPDATE employee SET role_id=? WHERE id=?"

      connection.query(data, [employeeRoleID, ID], (err,res) => {
        if(err) throw err;
        console.table(res);
        startMenu();
      });
    });
  });
}










