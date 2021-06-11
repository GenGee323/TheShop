-- DROP TABLE IF EXISTS product_cart_junction
-- DROP TABLE IF EXISTS carts
-- DROP TABLE IF EXISTS products
-- DROP TABLE IF EXISTS users


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(2000)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100),
  product_description VARCHAR(1000),
  product_image VARCHAR(2000),
  product_prce INTEGER (100)
);

CREATE TABLE carts (
  cart_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  active BOOLEAN
);

CREATE TABLE product_cart_junction (
  product_cart_id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES carts(cart_id),
  product_id INT REFERENCES products(product_id),
  quantity INT,
  user_id INT REFERENCES users(user_id)
-- );

-- SELECT * FROM carts c 
-- JOIN users u ON c.user_id = u.user_id ; 

-- SELECT * FROM product_cart_junction pc
-- JOIN products p ON pc.product_id = p.product_id
-- JOIN users u ON pc.user_id = u.user_id ;


-- #	user_id	email	password
-- 1	1	user1@theshop.com	password1
-- 2	2	user2@theshop.com	password2
-- 3	3	user3@theshop.com	password3
-- 4	4	user4@theshop.com	password4
-- 5	5	user5@theshop.com	password5
-- 6	6	user6@theshop.com	password6
-- 7	7	user7@theshop.com	password7
-- 8	8	user8@theshop.com	password8
-- 9	9	user9@theshop.com	password9
-- 10	10	user10@theshop.com	password10

-- #	product_cart_id	cart_id	product_id	quantity	user_id
-- 1	11	1	1	3	1
-- 2	1	1	1	2	1
-- 3	12	2	2	2	2
-- 4	2	2	2	1	2
-- 5	13	3	3	1	3
-- 6	3	3	3	2	3
-- 7	14	4	4	5	4
-- 8	4	4	4	2	4
-- 9	15	5	5	3	5
-- 10	5	5	5	3	5
-- 11	16	6	6	2	6
-- 12	6	6	6	8	6
-- 13	17	7	7	4	7
-- 14	7	7	7	6	7
-- 15	18	8	8	2	8
-- 16	8	8	8	6	8
-- 17	19	9	1	1	9
-- 18	9	9	1	6	9
-- 19	20	10	2	1	10
-- 20	10	10	2	6	10

-- #	cart_id	user_id	active
-- 1	1	1	t
-- 2	2	2	t
-- 3	3	3	t
-- 4	4	4	t
-- 5	5	5	t
-- 6	6	6	t
-- 7	7	7	t
-- 8	8	8	t
-- 9	9	9	t
-- 10	10	10	t

-- #	product_id	product_name	product_description	product_image
-- 1	1	Doormat	$15 Coco Coir Door Mat with Heavy Duty Backing	doormat.jpg
-- 2	2	Storage Containers	$40 Airtight Food Storage Container Set	storage-containers.jpg
-- 3	3	Kitchen Towels	$10 Classic Kitchen Towels 100% Natural Cotton Dish	kitchentowels.jpg
-- 4	4	Bike Saddles	$20 Bike Seat Most Comfortable for Men and Women	bikesaddle.jpg
-- 5	5	Device Accessory	$5 Universal Smartphone Bumper Case	iphone-case.jpg
-- 6	6	Toy Kitchen	$60 Play Kitchen for Kids 	Toy_Kitchen.jpg
-- 7	7	Car upholstery	$70 Rubber Car Floor Mats Universal Front & Rear 	Car_interior.png
-- 8	8	Book case	$250 Sauder Select Collection 5-Shelf Bookcase	bookcase.jpg