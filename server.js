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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //dont have do /view relative path

app.use(logger('dev')); //every request goes thru middleware
//app.use(express.static(express.join))

app.use(express.static(path.join(__dirname, 'public'))); //do I need it?
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


app.get('/', itemController.getAll,(req,res) => {
 res.render('items/index', {item: res.locals.item});
  //we are get all the rendered items in getall func
  //res.send('hello');
})

//for getOne
// app.get('/:id', itemViewC.getOne, (req, res) => {
//   res.sendfile(__dirname + 'items/showOne');
// })

app.use('/', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

