const db = require('../config/connection');
//item no delete that will be cart

//get all for index
function getAllItems() {
  const queryPromise = db.any(`
    SELECT * FROM item
  `);
  console.log(queryPromise);
  return queryPromise
};

//getOne
function getOneItem(id) {
  const queryPromise = db.one(`
    SELECT * FROM item
    WHERE id = $1`, id);
  return queryPromise;
};

//create for cart
function createItem(item) {
  console.log("this is item in model:", item);
  const queryPromise = db.one(`
    INSERT INTO item (title, img, type, power, price, description)
    VALUES ($/title/, $/img/, $/type/, $/power/, $/price/, $/description/)
    RETURNING *
  `, item)
  console.log('this is queryPromise:', queryPromise);
  return queryPromise;
}

//in case I want to do item in # of same items
function updateItem(item) {
  const queryPromise = db.one(`
    UPDATE item
    SET title = $/title/, img = $/img/, type = $/type/, power = $/type/, price = $/type/, description = $/description/
    WHERE id = $/id/
    RETURNING *
`, item);
 return queryPromise
};


//delete
function destroyItem(id) {
  const queryPromise = db.none(`
    DELETE FROM item WHERE id = $1
  `, id);
  return queryPromise;
};

module.exports = {
  getAllItems,
  getOneItem,
  updateItem,
  destroyItem,
  createItem
}
