const db = require('../config/connection');
//item no delete that will be cart

//get all for index
function getAllItems() {
  const queryPromise = db.any(`
    SELECT * FROM item
  `);
  return queryPromise
};

//getOne
function getOneItem(id) {
  const queryPromise = db.one(`
    SELECT * FROM item WHERE item_id = $1
  `, id);
  return queryPromise
};

//in case I want to do item in # of same items
function updateItem(items) {
  const queryPromise = db.one(`
    UPDATE items
    SET title = $/title/, img = $/img/, type = $/type/, power = $/type/, price = $/type/, description = $/description/
    WHERE item_id = $/id/
    RETURNING *
`, items);
 return queryPromise
};


//delete
function destroyItem(id) {
  const queryPromise = db.none(`
    SELECT * FROM item WHERE item_id = $1
  `, id);
  return queryPromise;
};
