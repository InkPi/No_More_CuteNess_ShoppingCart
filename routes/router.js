const router = require('express').Router();

//put all controllers

const PORT = process.env || 3000;

function send errors(err, req, res, next) {
  console.log('errors here');
  res.status(500).json({
    status: 'error',
    message: err.message
  });
};

//only need one router yay
module.exports = router;
