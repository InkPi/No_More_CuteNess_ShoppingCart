\c ncute_db

DELETE FROM customer;
DELETE FROM item;
DELETE FROM cart;

--where to put type attack and defense? using js select?
INSERT INTO item (title, img, power, price, description)
VALUES ('Reform Hammer', 'images/maxresdefault.jpg', 'maxresdefault.jpg', 'ATTK: +50', 2, 'Pulverize their appearance away with a special hammer endowed with electricity');

INSERT INTO item (title, img, type, power, sign, price, description)
VALUES ('Dark Shield', 'images/darkshield.png','DEFENSE: 50+', 'Give those controlling creatures taste of fear');
