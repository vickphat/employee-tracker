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
      "Add Department?"
    ]
  }])
    .then(function (value) {
      switch (value.choices) {
        // TODO come back and add switch statement
        case "View All Employees?":
          viewAllEmployees();
          break;
          
      }
    })
}

const viewAllEmployees = () => {

  let selection = ("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;")
  connection.query(selection, function (err, res) {
    if (err) throw err
    console.table(res);
    startMenu();
  })
}







// Connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // Run the startMenu function after the connection is made to prompt the user
  startMenu();
});
