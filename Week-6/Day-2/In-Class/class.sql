-- Database: temp

-- DROP DATABASE IF EXISTS temp;
CREATE TABLE city_info (
	event_datetime timestamp NOT NULL, 
	city VARCHAR(50) NOT NULL, 
	temperature decimal NOT NULL,
	light decimal NOT NULL, 
	airquality_raw decimal NOT NULL, 
	sound decimal NOT NULL, 
	humidity decimal NOT NULL, 
	dust decimal NOT NULL
);
​
SELECT * FROM city_info;
​
COPY city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) 
FROM '/Users/ShirMarkowitz/Desktop/DI/Week6/Day1/Course-Notes/city_info.csv' DELIMITER ',' CSV HEADER;
​
-- 1. Select everything from the table. (every row and columns) - How many records does the table have?
SELECT COUNT(*) FROM city_info; -- 4711 Records
-- 2. What was Bostons temperature on the 03/01/2015 at 11am ?
SELECT * FROM city_info WHERE city = 'Boston' AND EXTRACT(HOUR FROM event_datetime) = 11 AND DATE(event_datetime) = '2015-03-01';
-- The tempature was 3.08
-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?
SELECT EXTRACT(HOUR FROM event_datetime), EXTRACT(DAY FROM event_datetime) FROM city_info WHERE temperature BETWEEN 28 AND 30 AND city = 'San Francisco';
-- 12 rows at different hours, execute line to see all the days and hours 
-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
SELECT city, event_datetime, sound FROM city_info ORDER BY sound DESC LIMIT 1;
-- Geneva
-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
SELECT city, event_datetime, sound FROM city_info ORDER BY sound ASC LIMIT 1;
-- Boston
-- 6. Show the dust index of San Francisco on the 03/26/2015 after 20:00.
SELECT city, event_datetime, dust FROM city_info WHERE city = 'San Francisco' AND DATE(event_datetime) = '2015-03-26' AND EXTRACT(HOUR FROM event_datetime) > 20;
-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
SELECT EXTRACT(HOUR FROM event_datetime), EXTRACT(DAY FROM event_datetime) FROM city_info WHERE city = 'Geneva' AND (humidity < 40 OR humidity > 60);
-- 368 rows at different hours, execute line to see all the days and hours
-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
SELECT city ,EXTRACT(DOW FROM event_datetime) AS day_of_week FROM city_info ORDER BY light DESC LIMIT 1;
-- Rio de Janeiro and Monday
-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
Select DISTINCT(city) FROM city_info WHERE city ILIKE 's%';
-- 10. Add to the table, todays information in Israel - of this very hour. (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) -- - Use the return statement to see what you just inserted:
INSERT INTO city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
VALUES(NOW(), 'Ra''anana', 64, 0, 80, 800, 52, 400);
SELECT * FROM city_info WHERE city = 'Ra''anana';

CREATE DATABASE temp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;