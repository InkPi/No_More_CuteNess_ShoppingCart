function sendItems(req, res) {
  console.log('I send successful responses');
  // res.send('inside sendItems view')
  console.log(res.locals.item)
  res.render('items/index', {
    item: res.locals.item
  });
};

function sendOneItem(req, res) {
  res.render('items/showOne'), {
    item: res.locals.item
  };
};

module.exports = {
  sendItems,
  sendOneItem
}
