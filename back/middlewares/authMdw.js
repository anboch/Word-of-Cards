function notLogin(req, res, next) {
  if (!req.session.user) {
    next();
  }
}

function isLogin(req, res, next) {
  if (req.session.user) {
    return next();
  }
}

module.exports = { isLogin, notLogin };
