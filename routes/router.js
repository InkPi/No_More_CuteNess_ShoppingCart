const router = require('express').Router();
const AuthServices = require('./AuthServices');
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

//for each item after clicked
router.route('/:id')
    .get(itemController.getOne, itemViewController.sendOneItem, sendErrors);

router.get('/login', userViewControl.showLoginForm)

userRouter.get('/profile', AuthServices.loginRequired, (req, res) => {
     res.json(req.session);
   });

/*User Now*/
router.route('/user')
  .get(userController.getOne, userViewControl.showLoginForm, (req, res) => {
    res.json(req.session);
    //req.session comes from...
  });

router.route('/user/edit')
  .get(userController.edit, userViewControl.)


//only need one router yay
module.exports = router;
