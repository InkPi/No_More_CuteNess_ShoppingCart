//based off on a lab

module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },

  show406(err, req, res, next) {
    res.sendStatus(406);
  },

sendItems(req, res) {
  console.log('inside sendItems view');

  res.render('items/index', {
    item: res.locals.item
    })
  },

 sendOneItem(req, res) {
  res.render('items/showOne', {
    item: res.locals.item
    })
  },

  showEditForm(req, res) {
    res.render('items/itemEdit')
  },

  handleCreate(req, res) {
    // item = res.locals.newItem
    console.log('hello');
  },
  showAddForm(req, res) {
    res.render('items/itemAdd')
  },
  handleUpdate(req, res) {
    item = res.locals.item;
    res.render('items/itemEdit', {
      item: res.locals.item
    });
  },
  handleDelete(req, res) {
    res.redirect('/item')
  }

}
