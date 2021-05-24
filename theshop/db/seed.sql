DROP TABLE IF EXISTS product_cart_junction
DROP TABLE IF EXISTS carts
DROP TABLE IF EXISTS products
DROP TABLE IF EXISTS users


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(2000)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100),
  product_description VARCHAR(1000),
  product_image VARCHAR(2000)
);

CREATE TABLE carts (
  cart_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES wlr1_users(user_id),
  active BOOLEAN
);

CREATE TABLE product_cart_junction (
  product_cart_id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES wlr1_carts(cart_id),
  product_id INT REFERENCES wlr1_products(product_id),
  quantity INT
);

