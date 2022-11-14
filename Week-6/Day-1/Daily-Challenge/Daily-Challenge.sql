-- Database: hollywood

-- DROP DATABASE IF EXISTS hollywood;

CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL, 
	last_name VARCHAR (100) NOT NULL,
 	age DATE NOT NULL,
 	number_oscars SMALLINT NOT NULL
);

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

SELECT * FROM actors

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('Julia', 'Roberts', '10/28/1967', 4)

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('Jennifer', 'Aniston', '02/11/1969', 0)

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES
	('Brad', 'Pitt', '12/18/1963', 7),
	('Robert', 'Downey Jr.', '04/4/1965', 2),
	('Cillian ', 'Murphy', '05/25/1976', 2);
	
-- Instructions
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
SELECT COUNT(*) FROM actors;

INSERT INTO actors(first_name, last_name, birth_date, number_oscars)
VALUES ('Johnny', 'Deep', '06/09/1967',1);

CREATE DATABASE hollywood
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;