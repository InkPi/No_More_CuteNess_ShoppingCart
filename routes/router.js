const router = require('express').Router();
//put all controllers

const cartController = require('../controllers/cartController');
const cartViewController = require('../controllers/cartViewControl');

const itemController = require('../controllers/itemController');
const itemViewController = require('../controllers/itemViewControl');

const userController = require('../controllers/userController');
const userViewController = require('../controllers/userViewControl');

// router.get('/', (req,res) => {
//   res.send('hello')
// })
function sendErrors(err, req, res, next) {
  console.log('errors here');
  res.status(500).json({
    status: 'error',
    message: err.message
  });
};

router.route('/')
  // .get(itemController.getAll);
    .get(itemController.getAll, itemViewController.sendItems, sendErrors);

router.route('/:id')
    .get(itemController.getOne, itemViewController.sendOneItem, sendErrors);

/*User Now*/
// router.route('/user')
//   .get(userController)


//only need one router yay
module.exports = router;
