-- Exercise 1
-- Instructions
-- 1. Get a list of all film languages.
SELECT * FROM language;
-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
SELECT title, description, name
FROM film
INNER JOIN language
ON film.language_id = language.language_id

-- Get all films, even if they don’t have languages.
SELECT film.title, language.name
FROM film
LEFT JOIN language
ON film.language_id = language.language_id;
-- Get all languages, even if there are no films in those languages.
SELECT language.name, film.title
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id;
-- 3. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);
INSERT INTO new_film(name)
VALUES
	('Lord Of The Rings'),
	('Anchorman'),
	('Willy Wonka'),
	('Fast and Furious');
SELECT * FROM new_film

--4
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review(
	review_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	score SMALLINT NOT NULL,
	review_text TEXT NOT NULL,
	last_update TIMESTAMP NOT NULL,
	film_id SMALLINT REFERENCES new_film(id) ON DELETE CASCADE,
	language_id SMALLINT REFERENCES language(language_id)
);
SELECT * FROM customer_review;

--5
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(title, score, review_text, last_update, film_id, language_id)
	VALUES('LOTR Review', 100, 'Best movie ever', '2022-12-26', 
		   (SELECT id
		    FROM new_film
		    WHERE name = 'Lord Of The Rings'),
		   (SELECT language_id
		    FROM language
		    WHERE name = 'English')
		  ),
	('Anchorman', 90, 'Funny move', '2022-12-26', 
		   (SELECT id
		    FROM new_film
		    WHERE name = 'Anchorman'),
		   (SELECT language_id
		    FROM language
		    WHERE name = 'English')
		  );
--6
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film
WHERE name = 'Anchorman'
--The review from the customer_review table for Anchorman will be deleted.
