USE employees_DB

-- Departments
INSERT INTO department (id, name)
VALUES (1, "Retail");

INSERT INTO department (id, name)
VALUES (2, "Marketing");

INSERT INTO department (id, name)
VALUES (3, "Human Resouces");

INSERT INTO department (id, name)
VALUES (4, "IT");

-- Employees Roles
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Cashier", 26000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Store Manager", 60000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Assistant Store Manager", 45000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Regional Manager", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Marketing Director", 100000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Social Media Coordinator", 56000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "HR Administrator", 66000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Software Developer", 95000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "Web Developer", 85000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "System Adminstrator", 80000, 4);

-- Employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Xavier", "Lee", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jason", "Bourne", 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Chad", "Cruz", 3, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "White", 4, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Susan", "Colombo", 5, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Melissa", "Swan", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Alice", "Lang", 7, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Sarah", "Parker", 8, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Emily", "Perez", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Sofia", "Martinez", 10, null);


