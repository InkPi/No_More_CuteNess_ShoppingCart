const bcrypt = require('bcrypt');
const userDb = require('../model/user');

/*looked at past labs and solutions*/

/*findUser identical for both getone and edit*/
function getOne(req,res, next) {
  userDb.findUser(req.params.id)
  .then(data=> {
    res.locals.user = data;
    next();
  })
  .catch(err=> {
    next(err);
  })
}

function create(req, res, next) {
  console.log(req.body);
  userDb.createUser(req.body)
  .then(data=> {
    console.log(data);
    res.locals.user = data;
    next();
  })
  .catch(err => nect(err));
}

function edit(req,res) {
  studentsDb.findUser(req.params.id)
  .then(data => {
    res.locals.user = data;
    next();
  })
  .catch(err=> {
    err: err.message
  })
}

function update(req, res, next) {
  req.body.id = req.params.id;
  studentsDb.updateUser(req.body)
  .then(data=> {
    res.redirect(`/user/${req.body.id}`)
  })
  .catch(err => {
    err: err
  })
}


module.exports = {
  create,
  edit,
  edit,
  update
};
