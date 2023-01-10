-- CREATE OR REPLACE FUNCTION get_film_count(
-- 	len_from int,
-- 	len_to int
-- )
-- RETURNS int
-- LANGUAGE plpgsql
-- AS
-- $$
-- DECLARE
-- 	film_count integer;
-- BEGIN
-- 	SELECT COUNT(1)
-- 	INTO film_count
-- 	FROM film
-- 	WHERE LENGTH BETWEEN len_from AND len_to;
	
-- 	RETURN film_count;
-- END;
-- $$

-- SELECT get_film_count(40,90)

-- SELECT * FROM film


-- CREATE OR REPLACE FUNCTION get_cutsomer_full_name(
-- 	customerid int
-- )
-- RETURNS VARCHAR
-- LANGUAGE plpgsql
-- AS
-- $$
-- DECLARE
-- 	full_name varchar;
-- BEGIN
-- 	SELECT first_name || ' ' || last_name
-- 	INTO full_name
-- 	FROM customer
-- 	WHERE customer_id = customerid;
	
-- 	RETURN full_name;
-- END;
-- $$

-- SELECT get_cutsomer_full_name(5)

--function tht returns a table
DROP FUNCTION get_film

create or replace function get_film(
	pattern varchar 
)
	returns table (
		film_title varchar,
		r_year int
	)
language plpgsql
as
$$
begin
	return query
		select title, release_year::integer
		from film
		where title like pattern;
end;
$$


-- select title, release_year from film
select film_title from get_film('Al%')

--
SELECT * FROM accounts

CREATE TABLE accounts (
	id serial primary key,
	name varchar(100) not null,
	balance dec(15,2) not null
)

insert into accounts (name, balance)
values('Bob', 10000),
('Alice', 10000)

CREATE OR REPLACE PROCEDURE transfer(
	sender int,
	receiver int,
	amount dec
)
LANGUAGE plpgsql
AS
$$
BEGIN
	UPDATE accounts
	set balance = balance - amount
	WHERE id = sender;
	
	UPDATE accounts
	set balance = balance + amount
	WHERE id = receiver;
	
	COMMIT;
	
	
END;
$$

CALL transfer(1,2,10000000)




