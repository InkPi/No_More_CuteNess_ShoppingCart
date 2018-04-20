\c ncute_db

DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS cart;

CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  passw VARCHAR(100),
  description VARCHAR(300),
);

CREATE TABLE item (
  id SERIAL PRIMARY KEY,
  title VARCHAR (200),
  img TEXT,
  type VARCHAR(50),
  power VARCHAR(50),
  --put $ in ejs
  price INT,
  description VARCHAR(300)
);

--item or cart customer id refer
--function getall select item.id FROM cart COUNT or SELECT price, etc. From cart join item where itemid=id, WHERE user_id = id

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  --user id
  cart_id INTEGER, FOREIGN KEY (item_id) REFERENCES item(item_id),
  --js count func
);
