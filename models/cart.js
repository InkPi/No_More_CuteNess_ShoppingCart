const db = require('../config/connection');

//selecting, joining
//item delete
//user delete talking to user table

function getAllCart() {
  const queryPromise = db.any(`
      SELECT * FROM cart
  `);
  return queryPromise;
}

function getOneItem(id) {
  const queryPromise = db.one(`
    SELECT * FROM cart WHERE cart_id = $1
  `, id);
  return queryPromise
};

function destroyCart(id) {
  const queryPromise = db.none(`
    DELETE FROM cart WHERE cart_id = $1
  `, id);
  return queryPromise;
};

module.exports = {
  getAllCart,
  getOneItem,
  destroyCart
}
