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

          connection.query(data, [employeeRoleID, ID], (err, res) => {
            if (err) throw err;
            console.table(res);
            startMenu();
          });
        });
    });
}

// Function to add a new employee
const addEmployee = () => {

  inquirer.prompt([
    {
      type: "input",
      message: "What is the new employee's first name?",
      name: "firstName"
    },
    {
      type: "input",
      message: "What is the new employee's last name?",
      name: "lastName"
    },
    {
      type: "input",
      message: "What is the new employee's role ID number?",
      name: "roleID"
    },
    {
      type: "input",
      message: "What is the new employee's manager ID number?",
      name: "managerID"
    }
  ])
    .then((answer) => {

      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
      });
    });
}

// Function to add a new role
const addRole = () => {

  inquirer.prompt([
    {
      type: "input",
      message: "What is the role's name?",
      name: "roleName"
    },
    {
      type: "input",
      message: "What is the annual salary:",
      name: "annualSalary"
    },
    {
      type: "input",
      message: "What is the department ID:",
      name: "departmentID"
    }
  ])
    .then((answer) => {
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.annualSalary, answer.departmentID], (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
      });
    });
}

// Function to add a new department
const addDepartment = () => {

  inquirer.prompt([
    {
      type: "input",
      message: "What is the department's name?",
      name: "departmentName"
    }
  ])
    .then((answer) => {
      connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
      })
    })
}


