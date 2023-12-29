

exports.getLogin = (req, res) => {
  res.render("user/login");
};

exports.getSignup = (req, res) => {
  res.render("user/signup");
};

exports.getHome = (req, res) => {
  res.render("user/user-home");
};
