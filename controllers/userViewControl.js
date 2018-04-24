/*Copied from lab*/
function sendOneUser(req, res) {
  res.render('auth/register'), {
    item: res.locals.user
  };
};

function sendUser(req,res) {
  res.render('user/profile', {
    user: res.locals.user
  });
};


module.exports = {
  sendOneUser,
  sendUser,
  showLoginForm(req, res) {
    console.log('got here');
    res.render('auth/login');
  },

  showRegisterForm(req, res) {
    res.render('auth/register');
  },

  handleLogout(req, res) {
    res.redirect('/');
  },
  handleDelete(req, res) {
    res.redirect('/login');
  },
};
