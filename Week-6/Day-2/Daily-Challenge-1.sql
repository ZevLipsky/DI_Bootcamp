CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

-- Questions
-- Q1. What will be the OUTPUT of the following statement?
-- The output is 0, we can't compare if it's not in null, it gives nothing
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )


-- Q2. What will be the OUTPUT of the following statement?
-- 2, there's two people who don't have an id of 5, one has null so that's undefined
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )


-- Q3. What will be the OUTPUT of the following statement?
-- the output is 0, we can't compare if it's not in null, it gives nothing
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )


-- Q4. What will be the OUTPUT of the following statement?
-- 2 since there's two ids that aren't 5, one has null so that's undefined 
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )