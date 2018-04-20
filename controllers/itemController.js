//models/__ import
const itemDb = require('../models/item');

function getAll(req, res, next) {
  console.log('About to query itemdb getall');
  itemDb.getAllItems()
    .then(data => {
      console.log ('Quieried itemDb and got ' + 'data.length' + 'results');
      res.locals.item = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

function getOne(req, res, next) {
  itemDb.getOneItem(req.params.id)
    .then(data => {
      console.log('Queried itemdb and got ' + 'data.length' + 'results');
      res.locals.item = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

// function update(req, res, next) {
//   req.body.id = req.params.id;
//   itemDb.update
// }
// function update(req, res, next) {
//   req.body.id = req.params.id;
//   itemDb.updateStudent(req.body)
//     .then(data => {
//       res.redirect(`/students/${req.body.id}`)
//     })
//     .catch(err=> {
//       err:err
//     })
// }

function
module.exports = {
  getAll,
  getOne
}
