\c ncute_db

DELETE FROM users;
DELETE FROM item;
DELETE FROM cart;

/*
        customer
                            */



/*
            item
                            */

--where to put type attack and defense? using js select?
INSERT INTO item (title, img, type, power, price, description)
VALUES (
  'Reform Hammer',
  'http://pixelartmaker.com/art/3424b7df307f616.png',
  'Light',
  'ATTK: +50',
  2,
  'Pulverize their appearance away with a special hammer endowed with electricity');

INSERT INTO item (title, img, type, power, price, description)
VALUES (
  'Dark Shield',
  'http://pixelartmaker.com/art/3424b7df307f616.png',
  'Dark',
  'DEFENSE: 60+',
  3,
  'Give those controlling creatures taste of fear');

INSERT INTO item (title, img, type, power, price, description)
VALUES (
  'Screaming Shield',
  'http://pixelartmaker.com/art/3424b7df307f616.png',
  'Dark',
  'DEFENSE: 80+',
  5,
  'Shield will record voices of those whom you are purifying with their last voice, appearance, and screams. Will petrify those who see this sight in their tracks.');

INSERT INTO item (title, img, type, power, price, description)
VALUES (
  'Bloody Spear',
  'http://pixelartmaker.com/art/3424b7df307f616.png',
  'Normal',
  'ATTK: 20+',
  1,
  'For stabbing through those ***. If their fellow evil doer sees the sight, it will quiver in fear.');

INSERT INTO item (title, img, type, power, price, description)
VALUES (
  'Bloody Knife',
  'http://pixelartmaker.com/art/3424b7df307f616.png',
  'Normal',
  'ATTK: 20+',
  1,
  'For slicing through those ***.');



/*Cart*/
