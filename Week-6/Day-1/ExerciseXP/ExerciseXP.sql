-- Database: public

-- DROP DATABASE IF EXISTS public;
CREATE TABLE items (
    item_id  SERIAL PRIMARY KEY,
    item_name VARCHAR(20) NOT NULL,
    price MONEY NOT NULL
);

CREATE TABLE customers (
    customer_id  SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name  VARCHAR(20) NOT NULL
);

INSERT INTO items (item_name, price) 
VALUES 
('Small Desk', 100),
('Large desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name) 
VALUES 
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * FROM items;
SELECT * FROM customers;
SELECT * FROM items WHERE price>80;
SELECT * FROM items WHERE price<=300;
SELECT * FROM customers WHERE last_name='Smith';
SELECT * FROM customers WHERE last_name='Jones';
SELECT * FROM customers WHERE first_name!='Scott';





CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;