-- Daily Challenge 
-- Instructions
-- Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.
CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR(50) NOT NULL,
	price INTEGER NOT NULL
);

CREATE TABLE product_orders(
	product_id SERIAL PRIMARY KEY,
	order_number INTEGER NOT NULL,
	item_id SMALLINT REFERENCES items(item_id) ON DELETE CASCADE ON UPDATE CASCADE UNIQUE
);
SELECT * FROM items;
SELECT * FROM product_orders;

INSERT INTO items(item_name, price)
VALUES
	('Chair', 200),
	('Table', 500),
	('Bed', 1000);
	
INSERT INTO product_orders(order_number, item_id)
VALUES
	(50, (SELECT item_id FROM items WHERE item_name = 'Chair')),
	(60, (SELECT item_id FROM items WHERE item_name = 'Table')),
	(80, (SELECT item_id FROM items WHERE item_name = 'Bed'));
-- Create a function that returns the total price for a given order.
CREATE FUNCTION get_total_price(order_num INTEGER)
	RETURNS INTEGER AS $total_price$
BEGIN
	RETURN(SELECT price FROM items WHERE item_id = (SELECT item_id FROM product_orders WHERE order_number = order_num));
END;
$total_price$ LANGUAGE plpgsql;
SELECT * FROM get_total_price(50);