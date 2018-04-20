/** using what was taught in js-node-session
 * @module userDB
 * @desc this module is the interface for the database. It contains
 * CRUD methods in SQL to talk to the database.
 * Each function returns a promise
 */

// TODO: [1] require pg-promise, and execute it like a function.
// TODO: [2] require our DB config
const pgp      = require('pg-promise')({
  query: q => console.log(q.query),
});

const dbConfig = require('../../config/dbConfig');
