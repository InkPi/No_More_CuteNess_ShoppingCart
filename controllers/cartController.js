const cartDb = require('../models/cart');
const cartController = {};

//get all items clicked through button
//cartController.show
//WHERE item_id = item(id)

//delete item off cart
cartController.delete = (req,res) => {
  cartController.destroyCart(req.params.id)
  .then(()=> {
    res.redirect('/cart');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  })
}
module.exports = cartController;

