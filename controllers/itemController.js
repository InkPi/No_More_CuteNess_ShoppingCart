//models/__ import
const itemDb = require('../models/item');

function getAll(req, res, next) {
  console.log('About to query itemdb getall');
  //after comment out, able to link server app.get('/' first)
  itemDb.getAllItems()
    .then(data => {
      //res.status(200).render('items/index', {item: item});
      console.log ('Quieried itemDb and got ' + 'data.length' + 'results');
      res.locals.item = data;
      console.log(data); //data is empty
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

function getOne(req, res, next) {
  //console.log(req.params);
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

//was told to do item create for cart
function create(req, res, next) {
  console.log("this is req.body:", req.body);
  itemDb.createItem(req.body)
  .then(data => {
    console.log("this is data in controller:", data);
    res.locals.item = data;
    next();
  }).catch(err => next(err));
}

function destroy(req, res, next) {
  console.log('Going to delete');
  itemDb.destroyItem(req.params.id)
  .then(() => {
    next()
  })
  .catch(err => {
    next(err)
  })
}

function update(req, res, next) {
  console.log(req.body, 'update controller');
  itemDb.update(req.body)
    .then((item) => {
      res.locals.item = item;
      next();
    })
    .catch(err => next(err));
  }

module.exports = {
  getAll,
  getOne,
  create,
  destroy,
  update
}
