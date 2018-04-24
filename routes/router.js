const Router = require('express').Router();
const AuthServices = require('./AuthServices');
//put all controllers

const cartController = require('../controllers/cartController');
const cartViewController = require('../controllers/cartViewControl');

const itemController = require('../controllers/itemController');
const itemViewController = require('../controllers/itemViewControl');

const userController = require('../controllers/userController');
const userViewController = require('../controllers/userViewControl');


//for each item after clicked //got help eith put, post, delete
Router.route('/item/:id')
    .get(itemController.getOne, itemViewController.sendOneItem, itemViewController.show406)
    .put(itemController.update, itemViewController.handleUpdate, itemViewController.show406)
    .delete(itemController.destroy, itemViewController.handleDelete, itemViewController.show404);

Router.get('/new', itemViewController.showAddForm);
Router.get('/item/:id/edit', itemController.getOne, itemViewController.handleUpdate);


Router.route('/newItem')
    .post(itemController.create, itemViewController.handleCreate, itemViewController.show406);

Router.route('/item')
    .get(itemController.getAll, itemViewController.sendItems, itemViewController.show406)
    .post(itemController.create, itemViewController.handleCreate, itemViewController.show406);



// Router.get('/user/:id', function (req, res, next) {
//   console.log(req.params.id);
//   res.render('special')
// });

// cart
// Router.get('/cart', function (err, req, res, next) {
//   onsole.log('err');
//   res.render('cart/index')
// });



//only need one router yay
module.exports = Router;
