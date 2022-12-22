CREATE TABLE products(
	id serial primary key not null,
	name varchar(255) not null,
	price integer not null
)

-- SELECT * FROM products

-- INSERT INTO products(name,price)
-- values('iPhone', 850)
-- ('iPad', 750)
-- ('iWatch', 650)