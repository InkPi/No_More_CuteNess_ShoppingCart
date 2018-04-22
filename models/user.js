/** using what was taught in js-node-session
 * @module userDB
 * @desc this module is the interface for the database. It contains
 * CRUD methods in SQL to talk to the database.
 * Each function returns a promise
 */

// TODO: [1] require pg-promise, and execute it like a function.
// TODO: [2] require our DB config
connst bcrypt = require('bcrypt');
const db = require('../config/connection');

// const pgp      = require('pg-promise')({
//   query: q => console.log(q.query),
// });

// const dbConfig = require('../../config/dbConfig');

function findUser(usern) {
  const queryPromise = db.one(`
    SELECT *
    FROM user
    WHERE usern = $1
  `, usern);
  return queryPromise;
};

function createUser(user) {
    const queryPromise = db.one(`
    INSERT INTO user (usern, email, passw, description)
    VALUES ($/usern/, $/email/, $/passw/, $/description/)
    RETURNING *
    `, user
  );
  return queryPromise;
};

function updateUser(user) {
    return db.one(`
      UPDATE user
      SET
      email = $/email/,
      passw = $/passw/,
      description = $/description/
      WHERE id = $/id/
      RETURNING *
    `, user);
  },

module.exports = {
    findUser,
    createUser,
    updateUser
}
