const express= require('express');
const logger = require('morgan'); //morgan server response, status
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //dont have do /view relative path

app.use(logger('dev')); //every request goes thru middleware
//app.use(express.static(express.join))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


//put get here
