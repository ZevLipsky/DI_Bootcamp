-- 1
SELECT * FROM customer;
--2
SELECT first_name, last_name AS full_name
FROM customer;
--3
SELECT DISTINCT create_date FROM customer;
--4
SELECT * FROM customer
ORDER BY first_name DESC;
--5
SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate ASC;
--6
select * from address
select * from customer
SELECT address, phone 
FROM address
WHERE district='Texas';
--7
SELECT * FROM film
WHERE film_id=15 OR film_id=150;
--8
-- Write a query which should check if your favorite movie exists in the database. 
-- Have your query get the film ID, title, description, length and the rental rate, 
-- these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title='Lord of The Rings';
--9
-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, 
-- description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title='lo%';
--10
-- Write a query which will find the 10 cheapest movies.
SELECT * FROM film
ORDER BY rental_rate ASC LIMIT 10;
-- --11
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT * FROM film 
ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;
--12
-- Write a query which will join the data in the customer table and the payment table. 
-- You want to get the first name and last name from the curstomer table, as well as the amount 
-- and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT first_name, last_name, amount, payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.customer_id
--13
-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT title, inventory_id
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
WHERE film.film_id != inventory.film_id
--14
--Write a query to find which city is in which country.
SELECT city, country
FROM city 
INNER JOIN country
ON city.country_id = country.country_id
--15cd DI