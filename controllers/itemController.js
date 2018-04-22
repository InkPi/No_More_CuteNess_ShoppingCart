//models/__ import
const itemDb = require('../models/item');

function getAll(req, res, next) {
  console.log('About to query itemdb getall');
  //res.send('hello from getAll')
  //after comment out, able to link server app.get('/' first)
  itemDb.getAllItems()
    .then(data => {
      //res.status(200).render('items/index', {item: item});
      console.log ('Quieried itemDb and got ' + 'data.length' + 'results');
      res.locals.item = data;
      console.log(data); //data is empty
      //res.status(200).render('items/index', {item: data});
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

function getOne(req, res, next) {
  console.log(req.params);
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


module.exports = {
  getAll,
  getOne
}
