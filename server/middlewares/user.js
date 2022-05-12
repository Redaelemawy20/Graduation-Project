const User = require("../models").User;
export default async (req, res, next) => {
  if (req.session.user) {
    const user = await User.findByPk(req.session.user.id);
    req.user = user;
  }
  next();
};
