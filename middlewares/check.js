module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      req.flash("error", "未登录");
      return res.redirect("/signin");
    }
    next();
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash("error", "已登录");
      return res.redirect("back"); // 返回之前的页面
    }
    next();
  },
  checkLoginRoot: function checkLoginRoot(req, res, next) {
    if (!req.session.user || req.session.user.name !== 'hasaki1997') {
      req.flash("error", "该用户组没有权限");
      return res.redirect("back"); // 返回之前的页面
    }
    next();
  }
};
