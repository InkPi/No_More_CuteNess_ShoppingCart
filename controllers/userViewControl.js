/*Copied from lab*/
function sendUser(req,res) {
  res.render('user/profile', {
    user: res.locals.user
  });
};

module.exports = {
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
