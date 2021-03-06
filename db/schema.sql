\c ncute_db

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS cart;

CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  usern VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  passw VARCHAR(100) NOT NULL,
  description VARCHAR(300),
  );

CREATE TABLE item (
  id SERIAL PRIMARY KEY,
  title VARCHAR (200),
  img TEXT,
  type VARCHAR(50),
  power VARCHAR(50),
  price INT,
  description VARCHAR(300)
);

--item or cart customer id refer
--function getall select item.id FROM cart COUNT or SELECT price, etc. From cart join item where itemid=id, WHERE user_id = id

--For cart creation:
--https://github.com/awesomejt/database-schema-examples/blob/master/shopping_cart/generic_create.sql
-- CREATE TABLE cart (
--   id SERIAL PRIMARY KEY,
--   --user id
--   item_id INTEGER NOT NULL,
--   name VARCHAR(50) NOT NULL,
--   --cart_id INT REFERENCES item(id)
--   last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP() NOT NULL,
--   PRIMARY KEY (cart_id, item_id)
--   );

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  item_id INTEGER NOT NULL REFERENCES item(id)
  );





-- CREATE TABLE CART
-- (
--     ID INTEGER PRIMARY KEY NOT NULL,
--     CUSTOMER_ID INTEGER NOT NULL,
--     NAME VARCHAR(50) NOT NULL
-- );
-- CREATE TABLE CART_ITEM
-- (
--     CART_ID INTEGER NOT NULL,
--     PRODUCT_ID INTEGER NOT NULL,
--     ITEM_QTY INTEGER NOT NULL,
--     LAST_UPDATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP() NOT NULL,
--     PRIMARY KEY ( CART_ID, PRODUCT_ID )
-- );

ALTER TABLE CART ADD FOREIGN KEY ( customer_id ) REFERENCES customer ( id );
-- CREATE INDEX FK_CUSTOMERCART_INDEX_1 ON CART ( CUSTOMER_ID );
-- ALTER TABLE CART_ITEM ADD FOREIGN KEY ( CART_ID ) REFERENCES CART ( ID );
ALTER TABLE CART_ITEM ADD FOREIGN KEY ( item_id ) REFERENCES item ( id );
-- CREATE INDEX FK_CARTITEMPRODUCT_INDEX_B ON CART_ITEM ( PRODUCT_ID );
-- CREATE UNIQUE INDEX UNIQUE_NAME_INDEX_F ON CATEGORY ( NAME );
-- ALTER TABLE PRODUCT ADD FOREIGN KEY ( CATEGORY_ID ) REFERENCES CATEGORY ( ID );
-- CREATE INDEX FK_PRODUCTCATEGORY_INDEX_1 ON PRODUCT ( CATEGORY_ID );
