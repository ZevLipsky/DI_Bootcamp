-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

CREATE TABLE students (
    id  SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name  VARCHAR(20) NOT NULL,
    date_birth DATE NOT NULL
)
INSERT INTO students(last_name,first_name,birth_date)
VALUES('Marc',	'Benichou',	'1998-11-02'),
('Yoan','Cohen','2010-12-03'),
('Lea',	'Benichou','1987-07-27'),
('Amelia',	'Dux',	'1996-04-07'),
('David','Grez','2003-06-14'),
('Omer','Simpson','1980-10-03');

INSERT INTO students(last_name,first_name,birth_date)
VALUES('Zev', 'Lipsky','1996-06-11')

SELECT * FROM students;
SELECT first_name , last_name FROM students;
SELECT first_name , last_name FROM students WHERE id=2;
SELECT first_name , last_name FROM students WHERE first_name ='Benichou' AND last_name='Marc';
SELECT first_name , last_name FROM students WHERE first_name ='Benichou' OR last_name='Marc';
SELECT first_name , last_name FROM students WHERE first_name ILIKE '%a%';
SELECT first_name , last_name FROM students WHERE first_name ILIKE 'a%';
SELECT first_name , last_name FROM students WHERE first_name ILIKE '%_a%';
SELECT first_name , last_name FROM students WHERE id=1 OR id=3;
SELECT * FROM students WHERE birth_date>='2000-01-01';

CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;