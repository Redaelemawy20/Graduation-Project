const User = require("../models").User;
export default async (req, res, next) => {
  if (req.session.user) {
    const user = await User.findByPk(req.session.user.id, {
      attributes: {
        exclude: ["password"],
      },
    });
    const currentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      bio: user.bio,
    };
    const userRole = await user.getRole();
    const userPermissions = await userRole.getPermissions();
    currentUser.Role = userRole;
    currentUser.permissions = userPermissions;
    req.user = currentUser;
  }
  next();
};
