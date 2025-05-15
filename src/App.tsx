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
      answer: "A transaction is a sequence of SQL operations that are treated as a single unit. \nIt ensures that either all operations are completed successfully or none are applied, maintaining data integrity.",
      codeExample: `
-- Start a transaction
START TRANSACTION;
-- Perform some operations
UPDATE accounts SET balance 
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
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
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
