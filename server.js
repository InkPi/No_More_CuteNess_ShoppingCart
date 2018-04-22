const express= require('express');
const logger = require('morgan'); //morgan server response, status
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./routes/router');
const itemController = require('./controllers/itemController');
const itemViewC = require('./controllers/itemViewControl');

const userController = require('./controllers/userController');
const userViewC = require('./controllers/userViewControl');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //dont have do /view relative path

app.use(logger('dev')); //every request goes thru middleware
//app.use(express.static(express.join))

app.use(express.static(path.join(__dirname, 'public'))); //do I need it?
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

/*Item*/
app.get('/', itemController.getAll,(req,res) => {
 res.render('items/index', {item: res.locals.item});
  //we are get all the rendered items in getall func
  //res.send('hello');
})

//for getOne
//can I add item/:id?
app.get('/:id', itemViewC.getOne, (req, res) => {
  res.sendfile(__dirname + 'items/showOne');
})

/*User*/
//https://expressjs.com/en/guide/using-middleware.html
router.use('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('user/profile')
  next()
});

router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

