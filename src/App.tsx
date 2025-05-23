import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. What is SQL?",
      answer: "SQL (Structured Query Language) is a language used to store, manage, and retrieve data from relational databases like MySQL, PostgreSQL, SQLite, etc.",
      codeExample: `
SELECT * FROM users;
      `
    },
    {
      id: 2,
      question: "2. What are the different types of SQL commands (DDL, DML, DCL, TCL)?",
      answer: "1. DDL (Data Definition Language) \nDefines the structure of the database. \n\tCREATE, ALTER, DROP, TRUNCATE \n\n2. DML (Data Manipulation Language) \nHandles data inside tables. \n\tINSERT, UPDATE, DELETE, SELECT \n\n3. DCL (Data Control Language) \nControls access to data. \n\tGRANT, REVOKE \n\n4. TCL (Transaction Control Language) \nManages changes made by DML. \n\tCOMMIT, ROLLBACK, SAVEPOINT \n5.DQL (Data Query Language) \nUsed to query the database. \n\tSELECT",
      codeExample: `
-- DDL Example
CREATE TABLE users (id INT, name VARCHAR(50));

-- DML Example
INSERT INTO users (id, name) VALUES (1, 'John');

-- DCL Example
GRANT SELECT ON users TO user1;

-- TCL Example
COMMIT;

-- DQL Example
SELECT * FROM users;`
    },
    {
      id: 3,
      question: "3. What is the use of GROUP BY and ORDER BY?",
      answer: "GROUP BY is used to arrange identical data into groups  like COUNT(), SUM(), etc.. \nORDER BY is used to sort the result set in either ascending or descending order.",
      codeExample: `
-- GROUP BY groups data
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;

-- ORDER BY sorts data
SELECT * FROM employees 
ORDER BY salary DESC;


GROUP BY → groups similar data.

ORDER BY → arranges data by column values.`
    },
    {
      id: 4,
      question: "4. What is the difference between WHERE and HAVING?",
      answer: "WHERE is used to filter rows before grouping. \nHAVING is used to filter groups after using GROUP BY.",
      codeExample: `
-- WHERE filters rows
SELECT * FROM employees 
WHERE salary > 50000;

-- HAVING filters grouped results
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 5;
`
    },
    {
      id: 5,
      question: "5. What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?",
      answer: "",
      codeExample: `
👩‍💼 Table: Employees
emp_id	name	dept_id
1	Raj	10
2	Priya	20
3	Aman	30
4	Neha	NULL

🏢 Table: Departments
dept_id	dept_name
10	HR
20	Sales
40	Marketing

----------------------------------------------------------------------------------------

🔸 INNER JOIN
Shows only matching rows from both tables.

SELECT * 
FROM Employees 
INNER JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales

----------------------------------------------------------------------------------------

🔸 LEFT JOIN
Shows all rows from left table (Employees), and matching rows from right table (Departments). 
If no match, shows NULL.

SELECT * 
FROM Employees 
LEFT JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales
3	Aman	30	NULL
4	Neha	NULL	NULL

----------------------------------------------------------------------------------------

🔸 RIGHT JOIN
Shows all rows from right table (Departments), and matching from left (Employees). 
If no match, shows NULL.

SELECT * 
FROM Employees 
RIGHT JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales
NULL	NULL	40	Marketing

----------------------------------------------------------------------------------------

🔸 FULL JOIN
Shows all rows from both tables, with NULL where there's no match.

SELECT * 
FROM Employees 
FULL JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales
3	Aman	30	NULL
4	Neha	NULL	NULL
NULL	NULL	40	Marketing`
    },
    {
      id: 6,
      question: "6. What is a primary key and a foreign key?",
      answer: "Primary Key: A column (or set of columns) that uniquely identifies each row in a table.\n✅ It must be unique and cannot be NULL.\n\nForeign Key: A column in one table that refers to the primary key in another table.\n✅ It creates a relationship between two tables.",
      codeExample: `
-- Primary Key
CREATE TABLE Students (
  roll_number INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Foreign Key
CREATE TABLE Marks (
  mark_id INT PRIMARY KEY,
  roll_number INT,
  marks INT,
  FOREIGN KEY (roll_number) REFERENCES Students(roll_number)
);


Simple Example:

Students Table
roll_number	name
1	        Raj
2	        Simran

Marks Table
mark_id	 roll_number	marks
101	    1	         90
102         2	         85



Students table (with roll_number as primary key)

Marks table (with roll_number as foreign key to link to the Students table)


Here:

Students.roll_number is a Primary Key

Marks.roll_number is a Foreign Key (pointing to Students)`
    },
    {
      id: 7,
      question: "7. What is the difference between UNION and UNION ALL?",
      answer: "UNION combines results from two or more SELECT statements, removing duplicates. \nUNION ALL combines results without removing duplicates.",
      codeExample: `
| Feature     |   UNION                                  | UNION ALL                          |
| ----------- | ---------------------------------------- | ---------------------------------- |
| Duplicates  | Removes duplicate rows                   | Includes all rows, even duplicates |
| Performance | Slower (extra work to remove duplicates) | Faster (no duplicate check)        |
| Use Case    | When you want unique records only        | When you want full data as-is      |


-- Removes duplicates
SELECT name FROM students
UNION
SELECT name FROM teachers;

-- Keeps duplicates
SELECT name FROM students
UNION ALL
SELECT name FROM teachers;
`
    },
    {
      id: 8,
      question: "8. What is normalization? What are the normal forms?",
      answer: "Normalization is a way to arrange data in a database to: \n\tRemove duplicate data \n\tMake data easy to manage and update",
      codeExample: `
🔹 1NF (First Normal Form)

Rule:
Each cell should have only one value.
Each row should be unique.

✅ Good:

Roll | Name | Subject
----------------------
1    | Raj  | Math
2    | Ravi | Science

❌ Bad:

Roll | Name | Subjects
-------------------------
1    | Raj  | Math, Science   ← two values in one cell ❌

-----------------------------------------------------------------------------

🔹 2NF (Second Normal Form)

Rule:
Must be in 1NF
No partial dependency (don’t store data that depends on part of a combined key)
                      (સંયુક્ત કીના ભાગ પર આધાર રાખતો ડેટા સંગ્રહિત કરશો નહીં)

✅ Good:

Break table if subject depends only on Roll number:
Students Table:
Roll | Name
-------------
1    | Raj

Subjects Table:
Roll | Subject
---------------
1    | Math

-----------------------------------------------------------------------------

🔹 3NF (Third Normal Form)

Rule:
Must be in 2NF
No transitive dependency (columns should depend only on the key, not on other columns)
                         (કૉલમ ફક્ત કી પર આધાર રાખવો જોઈએ, અન્ય કૉલમ પર નહીં)

❌ Bad:

Roll | Name | Department | Dept_HOD
-----------------------------------
1    | Raj  | CS         | Mr. Amit
→ Dept_HOD depends on Department, not Roll → ❌

✅ Good:

Students Table:
Roll | Name | Department
--------------------------
1    | Raj  | CS

Department Table:
Department | Dept_HOD
------------------------
CS         | Mr. Amit

interview to say:
In 2NF, data should depend on the full key.
In 3NF, data should depend only on the key, not on other non-key columns.
`
    },
    {
      id: 9,
      question: "9. What is denormalization?",
      answer: "Denormalization is the process of combining normalized tables to improve read performance. \nIt can lead to data redundancy but speeds up data retrieval.",
      codeExample: `
-- Normalized Tables
Students Table:
Roll | Name
--------------------------
1    | Raj
2    | Simran
3    | Aman

Subjects Table:
Roll | Subject
--------------------------
1    | Math
2    | Science
3    | English

Marks Table:
Roll | Subject | Marks
--------------------------
1    | Math    | 90
2    | Science | 85
3    | English | 88


-- Denormalized Table
Students_Subjects_Marks Table:
Roll | Name   | Subject  | Marks
--------------------------
1    | Raj    | Math     | 90
2    | Simran | Science  | 85
3    | Aman   | English  | 88


-- Normalized tables are split into smaller tables to reduce redundancy.
-- Denormalized table combines them for faster access.
`

    },
    {
      id: 10,
      question: "10. What is the difference between DELETE, TRUNCATE, and DROP?",
      answer: "",
      codeExample: `
| Command  | What it does                            | Can Rollback? | Removes Table? | Speed                         |
| ---------| --------------------------------------- | ------------- | -------------- | ----------------------------- |
| DELETE   | Deletes selected rows (with 'WHERE')    | ✅ Yes       | ❌ No          | Slower (row by row)           |
| TRUNCATE | Deletes all rows (no 'WHERE')           | ❌ No        | ❌ No          | Faster than DELETE            |
| DROP     | Deletes entire table (structure + data) | ❌ No        | ✅ Yes         | Fastest (removes whole table) |


Example:
DELETE FROM students WHERE roll = 1;   -- Deletes only one row

TRUNCATE TABLE students;              -- Deletes all rows quickly

DROP TABLE students;                  -- Deletes table completely

`
    },
    {
      id: 11,
      question: "11. What is an index? Why is it used?",
      answer: "An index is a database object that improves the speed of data retrieval operations on a table. \nIt works like a book's index, allowing quick access to rows without scanning the entire table.",
      codeExample: `
Now you want to search for "Raj".
  Without index: It checks every row (slow).
  With index: It quickly jumps to "Raj" (fast).
  

🔸 Step 1: Create a table

  CREATE TABLE students (
      id INT PRIMARY KEY,
      name VARCHAR(100),
      age INT
  );
Now you have a students table with 3 columns: id, name, and age.


🔸 Step 2: Insert some data

  INSERT INTO students (id, name, age) VALUES
  (1, 'Raj', 18),
  (2, 'Pooja', 19),
  (3, 'Amit', 20);


🔸 Step 3: Create an index on the name column

  CREATE INDEX raj_name_index ON students(name);

Here, raj_name_index is just a custom name for the index.
This index helps make searches like WHERE name = 'Raj' faster.


🔸 Step 4: Use the index (automatically used by database)
Now if you do this:

  SELECT * FROM students WHERE name = 'Raj';

The database will use the raj_name_index index to search faster.


🔸 Step 5: Drop (delete) the index

  DROP INDEX raj_name_index;

This removes the index named raj_name_index.
It does not delete any data from the students table — just the index.

  `
    },
    {
      id: 12,
      question: "12. What are constraints in SQL?",
      answer: "Constraints are rules applied to columns in a table to ensure data integrity. \nThey restrict the type of data that can be inserted into a table.",
      codeExample: `
PRIMARY KEY – Uniquely identifies each row in a table.

FOREIGN KEY – Links to a primary key in another table.

NOT NULL – Ensures a column cannot have a NULL value.

UNIQUE – Ensures all values in a column are different.

CHECK – Ensures that values in a column meet a specific condition.

DEFAULT – Sets a default value for a column when no value is provided.


CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Age INT CHECK (Age >= 18),
  City VARCHAR(50) DEFAULT 'Unknown'
);
`
    },
    {
      id: 13,
      question: "13. What is a subquery? Explain with example.",
      answer: "A subquery is a query nested inside another SQL query. \nIt can be used to retrieve data that will be used in the main query.",
      codeExample: `
-- Table: Students
ID | Name   | Age
---|--------|-----
1  | Raj    | 18
2  | Simran | 20
3  | Aman   | 22

-- Table: Marks
ID | StudentID | TotalMarks
---|-----------|------------
1  |     1     |    80
2  |     2     |    95
3  |     3     |    70

SELECT Name
FROM Students
WHERE ID = (
  SELECT StudentID
  FROM Marks
  ORDER BY TotalMarks DESC
  LIMIT 1
);

-- This will return the name of the student with the highest total marks.
-- In this case, it will return 'Simran' because she has the highest total marks of 95.
`
    },
    {
      id: 14,
      question: "14. What is the difference between IN and EXISTS?",
      answer: "IN checks if a value is present in a list or subquery result. \nEXISTS checks if a subquery returns any rows.",
      codeExample: `
Use IN for comparing values.

Use EXISTS when checking if a row exists that matches a condition.

-- Using IN
SELECT name FROM Students
WHERE id IN (1, 2, 3);
This gives names of students whose id is 1, 2, or 3.


-- Using EXISTS
SELECT name FROM Students s
WHERE EXISTS (
  SELECT * FROM Marks m WHERE m.student_id = s.id
);
`
    },
    {
      id: 15,
      question: "15. What is a view in SQL?",
      answer: "A view is a virtual table based on the result of a SELECT query. \nIt does not store data itself but provides a way to present data from one or more tables.",
      codeExample: `
-- Create a view
CREATE VIEW StudentView AS
SELECT s.id, s.name, m.total_marks
FROM Students s
JOIN Marks m ON s.id = m.student_id;

-- Use the view
SELECT * FROM StudentView;
-- This creates a view named StudentView that shows student names and their total marks.
-- You can use the view like a regular table.

-- Drop the view
DROP VIEW StudentView;
-- This removes the view from the database.
-- Note: Views can be used to simplify complex queries and provide a layer of security by restricting access to specific data.

--update the view
CREATE OR REPLACE VIEW StudentView AS
SELECT s.id, s.name, m.total_marks
FROM Students s
JOIN Marks m ON s.id = m.student_id
WHERE m.total_marks > 75;
-- This updates the view to show only students with total marks greater than 75.

`
    },
    {
      id: 16,
      question: "16. What is the difference between CHAR and VARCHAR?",
      answer: "CHAR is a fixed-length string data type, while VARCHAR is a variable-length string data type. \nCHAR always reserves the same amount of space, while VARCHAR only uses the space needed for the actual string.",
      codeExample: `
-- CHAR Example
CREATE TABLE example1 (
  code CHAR(5)
);

-- VARCHAR Example
CREATE TABLE example2 (
  code VARCHAR(5)
);

-- CHAR will always take 5 bytes, even if the string is shorter.
In CHAR(5), 'AB' is stored as 'AB ' (with 3 spaces).

-- VARCHAR will take only the space needed for the string.
In VARCHAR(5), 'AB' is stored as 'AB'.
`
    },
    {
      id: 17,
      question: "17. What is a stored procedure?",
      answer: "A stored procedure is like a function in SQL that performs a task (e.g., insert, update, or fetch data) and is stored in the database. \n\n✅ Why use it? \n\tTo avoid writing the same SQL code again and again \n\tTo improve performance \n\tTo enhance security by controlling data access",
      codeExample: `
-- Create a stored procedure
CREATE PROCEDURE GetStudents()
BEGIN
  SELECT * FROM students;
END;

-- Call the stored procedure
CALL GetStudents();
`
    },
    {
      id: 18,
      question: "18. What are functions in SQL?",
      answer: "Functions are reusable SQL code blocks that perform a specific task and return a value. \nThey can be used in SELECT, WHERE, and other clauses.",
      codeExample: `
✅ Types of SQL Functions:
Scalar Functions – Return a single value.
👉 Example: UPPER(), LOWER(), LEN(), ROUND()

Aggregate Functions – Return a single result from a set of values.
👉 Example: SUM(), AVG(), COUNT(), MAX(), MIN()

String Functions – Work with text.
👉 Example: CONCAT(), SUBSTRING()

Date Functions – Handle date/time.
👉 Example: NOW(), CURDATE(), DATEDIFF()

Mathematical Functions – Work with numbers.
👉 Example: ABS(), CEIL(), FLOOR()

types of functions in SQL:

built-in functions example:

SELECT UPPER(name) FROM students;
-- Converts all student names to uppercase


user-defined functions:
CREATE FUNCTION GetStudentsAboveAge (@age INT)
RETURNS TABLE
AS
RETURN
(
    SELECT * FROM students WHERE age > @age
);
-- Call the function
SELECT * FROM GetStudentsAboveAge(18);
`
    },
    {
      id: 19,
      question: "19. What is the difference between BETWEEN and IN?",
      answer: "BETWEEN checks if a value is within a range (inclusive). \nIN checks if a value matches any value in a list.",
      codeExample: `
-- Using BETWEEN
SELECT * FROM students WHERE age BETWEEN 18 AND 25;

-- Using IN
SELECT * FROM students WHERE age IN (18, 21, 25);

-- BETWEEN checks if age is between 18 and 25 (inclusive).
-- IN checks if age is one of the values in the list (18, 21, or 25).
`
    },
    {
      id: 20,
      question: "20. What is a trigger in SQL?",
      answer: "A trigger is a special type of stored procedure that automatically runs when certain events occur in the database (like INSERT, UPDATE, DELETE). \nIt can be used to enforce business rules or maintain data integrity.",
      codeExample: `
🔹 Step 1: Create the students table
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  created_at DATETIME
);



🔹 Step 2: Create the trigger

CREATE TRIGGER BeforeInsertStudent
BEFORE INSERT ON students
FOR EACH ROW
BEGIN
  SET NEW.created_at = NOW();    // created_at this column name ok and NEW.created_at this not create column but it is add new row with current date and time
END;

-- This trigger sets the created_at column to the current date and time before inserting a new student record.


🔹 Step 3: Insert a new student
INSERT INTO students (name) VALUES ('Raj');
❗You did not insert created_at — it is automatically filled by the trigger.

🔹 Step 4: View the table
SELECT * FROM students;


output:
| id | name | created_at         |
| -- | ---- | ------------------- |
| 1  | Raj  | 2025-05-14 10:35:00 |



-- Drop the trigger
DROP TRIGGER BeforeInsertStudent;
-- This removes the trigger from the database.
`
    },
    {
      id: 21,
      question: "21. What is a transaction in SQL?",
      answer: "A transaction in SQL is a set of operations that are done together. If one fails, all changes can be rolled back to keep the database safe.",
      codeExample: `
-- Full example of a transaction
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
-- This transfers 100 from account 1 to account 2.
-- If any operation fails, you can use ROLLBACK to undo all changes.

----------------------------------------------------------------------------
second example of a transaction
BEGIN;  -- Start the transaction

-- Step 1: Deduct ₹1000 from Account A
UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

-- Step 2: Add ₹1000 to Account B
UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;  -- Save the changes permanently

----------------------------------------------------------------------------
BEGIN; and START TRANSACTION; are both used to start a SQL transaction. They work the same way
— it's just a matter of style or database preference.
      `
    },
    {
      id: 22,
      question: "22. What is SET used for in SQL?",
      answer: "In SQL, the SET keyword is used to assign a value to a column.\nIt is mostly used in: \n\tUPDATE statements to update existing records. \n\tTRIGGERS or STORED PROCEDURES to assign values to new rows.",
      codeExample: `
Syntax of SET in UPDATE:
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;

Syntax of SET in a Trigger:
SET NEW.column_name = value;
`
    },
    {
      id: 23,
      question: "23. What are ACID properties in a database?",
      answer: " sdsda",
      codeExample: `
🔹 A – Atomicity
All or nothing.
Either the entire transaction happens or nothing happens.
Example: Money is deducted and added — both must succeed.

🔹 C – Consistency
Data stays correct.
Transaction keeps the database in a valid state.
Example: Total money before and after a transfer stays the same.

🔹 I – Isolation
Transactions don’t interfere with each other.
If many users do operations at the same time, each works as if alone.

🔹 D – Durability
Data is saved permanently.
Once a transaction is complete, changes are not lost — even if the system crashes.
`
    },
    {
      id: 24,
      question: "24. What are clustered and non-clustered indexes?",
      answer: "A clustered index sorts and stores the table data physically. \nA non-clustered index creates a separate lookup to find data faster.",
      codeExample: `
-- Clustered Index
CREATE CLUSTERED INDEX idx_student_id
ON students(student_id);

-- Non-Clustered Index
CREATE NONCLUSTERED INDEX idx_student_name
ON students(name);

-------------------------------------------------------------------------------------------

🎓 Table: students
| student\_id | name   | age | city     |
| ----------- | ------ | --- | -------- |
| 3           | Raj    | 21  | Keshod   |
| 1           | Aman   | 22  | Junagadh |
| 4           | Zoya   | 20  | Surat    |
| 2           | Bhavya | 23  | Rajkot   |

-------------------------------------------------------------------------------------------

✅ Clustered Index on student_id
When you create a clustered index on student_id, the table is physically sorted by that column:

📘 After applying clustered index:
| student\_id | name   | age | city     |
| ----------- | ------ | --- | -------- |
| 1           | Aman   | 22  | Junagadh |
| 2           | Bhavya | 23  | Rajkot   |
| 3           | Raj    | 21  | Keshod   |
| 4           | Zoya   | 20  | Surat    |

-------------------------------------------------------------------------------------------

✅ Non-Clustered Index on name
Creates a separate structure with a pointer to the data: creat new structure or new table

📗 Non-clustered index:
| name   | Pointer to student\_id |
| ------ | ---------------------- |
| Aman   | → 1                    |
| Bhavya | → 2                    |
| Raj    | → 3                    |
| Zoya   | → 4                    |

`
    },
    {
      id: 25,
      question: "25. What is a composite key?",
      answer: "A composite key is a combination of two or more columns in a table that can uniquely identify a row. \nIt is used when no single column can serve as a primary key. \nthis used like two different table columns are used to create a new table.",
      codeExample: `
📘 Simple Example:
Imagine a Marks table:

| Student\_ID | Subject\_ID | Marks |
| ----------- | ----------- | ----- |
| 1           | 101         | 85    |
| 1           | 102         | 90    |
| 2           | 101         | 88    |


Student_ID alone is not unique.
Subject_ID alone is not unique.

But together, Student_ID + Subject_ID is unique.

🗝️ This combination is a composite key.


🧾 SQL Example:
CREATE TABLE Marks (
  Student_ID INT,
  Subject_ID INT,
  Marks INT,
  PRIMARY KEY (Student_ID, Subject_ID)
);
`
    },
    {
      id: 26,
      question: "26. What is the use of CASE in SQL?",
      answer: "The CASE statement is used to create conditional logic in SQL queries. \nIt allows you to return different values based on different conditions.",
      codeExample: `
✅ Syntax:
SELECT
  column_name,
  CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE default_result
  END AS alias_name
FROM table_name;

------------------------------------------------------------------------------

🧾 Example:
Suppose you have a students table:

| name  | marks |
| ----- | ----- |
| Raj   | 85    |
| Priya | 45    |
| Amit  | 70    |

------------------------------------------------------------------------------

You want to add a "Result" column:
If marks ≥ 50 → "Pass"
Else → "Fail"

------------------------------------------------------------------------------

SELECT
  name,
  marks,
  CASE
    WHEN marks >= 50 THEN 'Pass'
    ELSE 'Fail'
  END AS result
FROM students;

------------------------------------------------------------------------------

🔍 Output:

| name  | marks | result |
| ----- | ----- | ------ |
| Raj   | 85    | Pass   |
| Priya | 45    | Fail   |
| Amit  | 70    | Pass   |

`
    },
    {
      id: 27.,
      question: "27. How can you find duplicate records in a table?",
      answer: "To find duplicate records in a table, you can use the GROUP BY clause along with HAVING to filter records that appear more than once.",
      codeExample: `
✅ Example:
Assume you have a table called students:

| id | name  | email                                   |
| -- | ----- | --------------------------------------- |
| 1  | Raj   | [raj@mail.com](mailto:raj@mail.com)     |
| 2  | Priya | [priya@mail.com](mailto:priya@mail.com) |
| 3  | Raj   | [raj@mail.com](mailto:raj@mail.com)     |
| 4  | Amit  | [amit@mail.com](mailto:amit@mail.com)   |

------------------------------------------------------------------------------

To find duplicate name and email:

SELECT name, email, COUNT(*)
FROM students
GROUP BY name, email
HAVING COUNT(*) > 1;

------------------------------------------------------------------------------

🔍 Output:
| name | email                               | count |
| ---- | ----------------------------------- | ----- |
| Raj  | [raj@mail.com](mailto:raj@mail.com) | 2     |
`
    },
    {
      id: 28,
      question: "28. How to remove duplicate value",
      answer: "To remove duplicate values from a table, you can use the DELETE statement with a subquery to identify duplicates.",
      codeExample: `
✅ Example Table: students
| id | name  | email                                     |
| -- | ----- | ----------------------------------------- |
| 1  | Raj   | 	raj@gmail.com                            |
| 2  | Priya | 	priya@gmail.com                          |
| 3  | Raj   | 	raj@gmail.com                            |
| 4  | Aman  | aman@gmail.com                            |
| 5  | Raj   |	raj@gmail.com                            |

------------------------------------------------------------------------------

SQL Query :
DELETE s1
FROM students s1
JOIN students s2
ON s1.name = s2.name AND s1.email = s2.email
WHERE s1.id > s2.id;

------------------------------------------------------------------------------

🔹 What the JOIN would produce:

| s1.id | s1.name | s1.email                            | s2.id | s2.name | s2.email                            |
| ----- | ------- | ----------------------------------- | ----- | ------- | ----------------------------------- |
| 3     | Raj     | [raj@mail.com](mailto:raj@mail.com) | 1     | Raj     | [raj@mail.com](mailto:raj@mail.com) |
| 5     | Raj     | [raj@mail.com](mailto:raj@mail.com) | 1     | Raj     | [raj@mail.com](mailto:raj@mail.com) |
| 5     | Raj     | [raj@mail.com](mailto:raj@mail.com) | 3     | Raj     | [raj@mail.com](mailto:raj@mail.com) |

------------------------------------------------------------------------------

✅ Final Clean Table After Deleting Duplicates:

| id | name  | email                                   |
| -- | ----- | --------------------------------------- |
| 1  | Raj   | [raj@mail.com](mailto:raj@mail.com)     |
| 2  | Priya | [priya@mail.com](mailto:priya@mail.com) |
| 4  | Aman  | [aman@mail.com](mailto:aman@mail.com)   |



Second method :

DELETE FROM students
WHERE id NOT IN (
  SELECT MIN(id)
  FROM students
  GROUP BY name, email
);

🔸 Step 1: The subquery
SELECT MIN(id)
FROM students
GROUP BY name, email;

This finds the lowest id (first one entered) for each unique combination of name and email.

Result of Subquery:
| MIN(id) |             |
| ------- | ----------- |
| 1       | ← First Raj |
| 2       | ← Priya     |
| 4       | ← Aman      |


🔸 Step 2: The outer query
DELETE FROM students
WHERE id NOT IN (...);

This means:
❌ Delete every row whose id is NOT in that list: [1, 2, 4]

`
    },
    {
      id: 29,
      question: "29. How do you write a query to get the second highest salary?",
      answer: "To get the second highest salary, you can use the following SQL query. ",
      codeExample: `
📌 Let's take this salary table:
| id | name  | salary |  
| -- | ----- | ------ |
| 1  | Raj   | 50000  |
| 2  | Priya | 60000  |
| 3  | Aman  | 70000  |
| 4  | Rani  | 80000  |
| 5  | Soham | 70000  |

------------------------------------------------------------------------------

Now run this query:

SELECT MAX(salary)
FROM employees
WHERE salary < (
  SELECT MAX(salary) FROM employees
);

Step-by-step:
1. Find max salary:
      SELECT MAX(salary) FROM employees;
      → 80000

2. Now use WHERE salary < 80000, so it considers:

      70000 ✅

      60000 ✅

      50000 ✅

3. Among these three, we now use:
      SELECT MAX(salary) FROM employees WHERE salary < 80000;
      → 70000

------------------------------------------------------------------------------

Second Method:
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;


🔍 Breakdown:
| Keyword                | Meaning                                                 |
| ---------------------- | ------------------------------------------------------- |
| SELECT DISTINCT salary | Gets all unique salary values (removes duplicates).     |
| ORDER BY salary DESC   | Sorts salaries in descending order (highest to lowest). |
| LIMIT 1                | Limits the result to only 1 row.                        |
| OFFSET 1               | Skips the first row (i.e., the highest salary).         |


💡 Example table:
| id | name  | salary |
| -- | ----- | ------ |
| 1  | Raj   | 50000  |
| 2  | Priya | 70000  |
| 3  | Aman  | 80000  |
| 4  | Rani  | 70000  |
| 5  | Soham | 60000  |


Steps it follows:
1. SELECT DISTINCT salary:
  → 80000, 70000, 60000, 50000

2.ORDER BY salary DESC:
  → 80000, 70000, 60000, 50000

3.OFFSET 1:
  → Skips 80000

4.LIMIT 1:
  → Returns 70000 ✅ (this is the second highest)
`
    },
    {
      id: 30,
      question: "30. What are window functions in SQL (like RANK(), DENSE_RANK(), ROW_NUMBER())?",
      answer: "Window functions perform calculations across a set of rows related to the current row. \nThey are used for ranking, calculating running totals, and more.",
      codeExample: `
ROW_NUMBER() → Unique number to each row

RANK() → Same rank for ties, skips next number

DENSE_RANK() → Same rank for ties, no skip


🧾 Example Table: employees
| id | name  | department | salary |
| -- | ----- | ---------- | ------ |
| 1  | Raj   | IT         | 70000  |
| 2  | Priya | IT         | 80000  |
| 3  | Aman  | HR         | 60000  |
| 4  | Rani  | IT         | 80000  |
| 5  | Soham | HR         | 60000  |

------------------------------------------------------------------------------------------

🧪 Example Query (ranking in each department by salary):
SELECT 
  name, department, salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM employees;

------------------------------------------------------------------------------------------

✅ Output:
| name  | department | salary | row_num | rank | dense_rank |
| ----- | ---------- | ------ | --------| ---- | ---------  |
| Priya | IT         | 80000  | 1       | 1    | 1          |
| Rani  | IT         | 80000  | 2       | 1    | 1          |
| Raj   | IT         | 70000  | 3       | 3    | 2          |
| Aman  | HR         | 60000  | 1       | 1    | 1          |
| Soham | HR         | 60000  | 2       | 1    | 1          |
`
    },
    {
      id: 31,
      question: "31. What is a cursor in SQL?",
      answer: "A cursor is a tool in SQL used to process each row one at a time from a result set. It's helpful when you need to perform row-by-row operations instead of working with the entire table at once.",
      codeExample: `
 Simple Example:
| id | name   | salary |
| -- | ------ | ------ |
| 1  | Raj    | 30000  |
| 2  | Neha   | 45000  |
| 3  | Ramesh | 60000  |


You want to increase salary by 10% if salary is less than 50000.

A cursor helps you:
  1. Check each row one-by-one.
  2. If the salary is below 50000, increase it by 10%.



🧪 Example in MySQL:

DECLARE emp_name VARCHAR(100);
DECLARE emp_salary INT;
DECLARE done INT DEFAULT FALSE;

-- Create a cursor
DECLARE emp_cursor CURSOR FOR 
  SELECT name, salary FROM employees;

-- Handle when no more rows
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

-- Open the cursor
OPEN emp_cursor;

-- Loop through each row
read_loop: LOOP
  FETCH emp_cursor INTO emp_name, emp_salary;

  IF done THEN
    LEAVE read_loop;
  END IF;

  -- Custom logic
  IF emp_salary < 50000 THEN
    -- give 10% bonus, just an example
    UPDATE employees SET salary = salary * 1.1 WHERE name = emp_name;
  END IF;

END LOOP;

-- Close the cursor
CLOSE emp_cursor;

`
    },
    {
      id: 32,
      question: "32. What are the different types of relationships in a database?",
      answer: "There are three main types of relationships in a database: \n1. One-to-One (1:1) \n2. One-to-Many (1:N) \n3. Many-to-Many (M:N)",
      codeExample: `
-- One-to-One
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
  );
CREATE TABLE StudentDetails (
  student_id INT PRIMARY KEY,
  address VARCHAR(255),
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
  ); 

-- One-to-Many
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
  );
CREATE TABLE Courses (
  course_id INT PRIMARY KEY,
  student_id INT,
  course_name VARCHAR(100),
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
  );

-- Many-to-Many
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
  );
CREATE TABLE Courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100)
  );
CREATE TABLE StudentCourses (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES Students(student_id),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
  );

-- many-to-many relationship this look like this in table
| student_id | course_id |
| ----------- | --------- |
| 1           | 101       |
| 1           | 102       |
| 2           | 101       |
| 2           | 103       |
| 3           | 102       |
| 3           | 103       |

------------------------------------------------------------------------------------------
 One-to-One (1:1)
👉 One record in Table A is related to one record in Table B.
🔐 Often used for splitting rarely used data into separate tables.

Example:
Users table and UserProfiles table.
Each user has only one profile, and each profile belongs to only one user.


2. One-to-Many (1:N) 🔥 Most common
👉 One record in Table A can be related to many records in Table B, but each record in Table B relates to only one in Table A.

Example:
Customers and Orders
One customer can place many orders.
Each order is linked to one customer.


3. Many-to-Many (M:N)
👉 Many records in Table A can relate to many in Table B.
✅ Requires a junction (bridge) table.

Example:
Students and Courses
A student can enroll in many courses, and a course can have many students.
A third table like StudentCourses is used to link them.

`
    },
    {
      id: 33,
      question: "33. What is the difference between schema and table?",
      answer: "🔹 Schema \n\tA schema is like a folder or container. \n\tIt organizes and groups related database objects — such as tables, views, functions, procedures, etc. \n\tHelps in managing access, permissions, and database structure. \n\n🧠 Think of it as: \n\tA bookshelf (schema) that holds many books (tables). \n------------------------------------------------------------------------------------------------------\n🔹 Table \n\tA table stores data in rows and columns. \n\tEach table is inside a schema. \n\tContains actual records like names, emails, prices, etc. \n\n🧠 Think of it as: \n\tA book (table) with pages full of actual data.",
      codeExample: `
-- Create a schema
CREATE SCHEMA school;

-- Create a table inside that schema
CREATE TABLE school.students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);


school is the schema
students is the table inside the schema`
    },
    {
      id: 34,
      question: "43. What is data integrity?",
      answer: "Data Integrity means ensuring the accuracy, consistency, and reliability of data in a database. x\nData integrity refers to the accuracy and consistency of data in a database. \nIt ensures that data is reliable, valid, and protected from unauthorized access or corruption.",
      codeExample: `
-- Example of data integrity constraints
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 18),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(id)
);
-- This table ensures:
-- 1. Each employee has a unique ID (PRIMARY KEY).
-- 2. Name cannot be NULL (NOT NULL).
-- 3. Email must be unique (UNIQUE).
-- 4. Age must be 18 or older (CHECK).



🔹 Types of Data Integrity:

| Type                   | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| Entity Integrity       | Ensures each row in a table is unique (usually via a Primary Key)          |
| Referential Integrity  | Ensures foreign keys correctly reference data in another table             |
| Domain Integrity       | Ensures the data type, format, and valid range (like age must be a number) |
| User-Defined Integrity | Custom rules (like salary must be > 0) enforced through constraints        |

`
    },
    {
      id: 35,
      question: "35. What is sharding in databases?",
      answer: "Sharding is the process of dividing a large database into smaller parts (shards) to improve performance and scalability by distributing the data across multiple servers or databases. \n\n Sharding = Splitting a large table/data into smaller parts stored in different places (servers/databases).",
      codeExample: `
🔸 Main Table Before Sharding:

-- users table (before sharding)
user_id | name      | country
--------|-----------|---------
1       | Raj       | India
2       | Ankit     | India
1000001 | John      | USA
1000002 | Alice     | USA


🔹 After Sharding – Split into 2 Tables:

users_shard_india
-- Users with user_id ≤ 1000000
user_id | name   | country
--------|--------|---------
1       | Raj    | India
2       | Ankit  | India


users_shard_usa
-- Users with user_id > 1000000
user_id | name   | country
--------|--------|---------
1000001 | John   | USA
1000002 | Alice  | USA

------------------------------------------------------------------------------------------


✅ 1. Create Shard Tables

--users_shard_india
CREATE TABLE users_shard_india AS
SELECT * FROM users
WHERE user_id <= 1000000;


--users_shard_usa
CREATE TABLE users_shard_usa AS
SELECT * FROM users
WHERE user_id > 1000000;

🔎 2. Check the Data
SELECT * FROM users_shard_india;
SELECT * FROM users_shard_usa;

`
    },
    {
      id: 36,
      question: "36. What is the difference between OLTP and OLAP?",
      answer: "",
      codeExample: `
🔹 OLTP (Online Transaction Processing)
  Purpose: Handles day-to-day transactions.
  Operations: Insert, Update, Delete (e.g., placing an order).
  Speed: Very fast for read/write operations.
  Data: Current, real-time data.
  Example: ATM transactions, online shopping, bank entries.
✅ Use case: "Add a new customer", "Update order status".


🔹 OLAP (Online Analytical Processing)
  Purpose: Helps in analyzing and reporting data.
  Operations: Complex queries for summaries, trends, insights.
  Speed: Optimized for reading large volumes of data.
  Data: Historical data (aggregated).
  Example: Sales analysis, market trends, reports.
✅ Use case: "What were total sales last year?", "Top 5 selling items".


🔄 Simple Comparison:
| Feature   | OLTP                    | OLAP                        |
| --------- | ----------------------- | --------------------------- |
| Use       | Day-to-day transactions | Data analysis and reporting |
| Data type | Current data            | Historical data             |
| Queries   | Simple, fast            | Complex, slower             |
| Example   | Booking ticket          | Analyzing sales by region   |
`
    },
    {
      id: 37,
      question: "37. What is database locking and deadlock?",
      answer: "Database locking is a mechanism to control access to data in a database. \nIt prevents multiple transactions from modifying the same data simultaneously, ensuring data integrity. \n\nA deadlock occurs when two or more transactions are waiting for each other to release locks, causing them to be stuck indefinitely.",
      codeExample: `
🔹 What is Database Locking?
  Locking is a mechanism used by the database to prevent multiple users from modifying the same data at the same time.

✅ Why it's used:
To ensure data consistency and avoid conflicts.

🔸 Example:
If User A is updating a row, the database locks it so User B can’t update it at the same time.

------------------------------------------------------------------------------------------

🔹 What is Deadlock?
  A deadlock happens when two or more users are waiting for each other to release a lock — and none of them can proceed.

📌 Think of it like:

User A locks Row 1, wants Row 2
User B locks Row 2, wants Row 1
Both are stuck waiting — this is a deadlock.

------------------------------------------------------------------------------------------

🗃 Example Setup (Assume you have a bank_accounts table):
CREATE TABLE bank_accounts (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    balance INT
);

INSERT INTO bank_accounts VALUES
(1, 'Alice', 1000),
(2, 'Bob', 1000);

🧠 Scenario to Demonstrate Deadlock (Using 2 sessions):

✅ Session 1 (User A):
BEGIN;
-- Lock Alice's row
UPDATE bank_accounts SET balance = balance - 100 WHERE id = 1;
-- Wait to update Bob’s row later


✅ Session 2 (User B):
BEGIN;
-- Lock Bob's row
UPDATE bank_accounts SET balance = balance - 100 WHERE id = 2;
-- Now tries to update Alice's row (already locked by Session 1)
UPDATE bank_accounts SET balance = balance + 100 WHERE id = 1;


🔄 Back to Session 1:
-- Now tries to update Bob’s row (already locked by Session 2)
UPDATE bank_accounts SET balance = balance + 100 WHERE id = 2;



💡 How to Resolve:
The database will detect the deadlock and automatically cancel one of the sessions with an error like:

ERROR: deadlock detected

`
    },
    {
      id: 38,
      question: "38. How do you optimize a slow SQL query?",
      answer: "",
      codeExample: `

✅ 1. Use Indexes Wisely
Add indexes to columns used in WHERE, JOIN, ORDER BY.

CREATE INDEX idx_name ON students(name);



✅ **2. Avoid SELECT ***
Only select the columns you need.

-- Bad
SELECT * FROM students;

-- Good
SELECT name, email FROM students;



✅ 3. Use WHERE to Filter Early
Always filter unnecessary rows early.

SELECT name FROM students WHERE city = 'Keshod';



✅ 4. Avoid Functions on Indexed Columns
Don’t apply functions like LOWER() or YEAR() on indexed columns in WHERE.



✅ 5. Use JOINS Smartly
Ensure correct JOIN conditions and indexes on joined columns.



✅ 6. Use LIMIT for Large Results

SELECT * FROM students LIMIT 100;



✅ 7. Analyze Execution Plan
Use EXPLAIN before your query to see how it runs.

EXPLAIN SELECT name FROM students WHERE city = 'Keshod';



✅ 8. Normalize or Denormalize Based on Use Case
Normalize for update speed and denormalize for read speed.`
    },

    
  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>SQL Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
