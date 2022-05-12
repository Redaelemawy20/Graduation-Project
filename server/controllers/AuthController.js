import { User } from "../models";
async function login(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });
  if (!user) {
    return res.status(404).send({ message: "invalid credentials" });
    // return res.send().statusCode(404);
  }
  req.session.user = user;
  let userRole = await user.getRole();

  return res.send(user);
}

async function logout(req, res) {
  req.session.destroy((err) => {
    if (err) res.status(404).send("no user to log out");
    return res.send("user logged out");
  });
}

async function currentUser(req, res) {
  // return res.send(req.headers);
  const { user } = req;
  console.log("user assss", user);
  if (!user) return res.send(user);
  const currentUser = {
    password: user.password,
    email: user.email,
    name: user.name,
  };
  const userRole = await user.getRole();
  const userPermissions = await userRole.getPermissions();
  currentUser.role = userRole;
  currentUser.permissions = userPermissions;
  return res.send(currentUser);
}

export default {
  login,
  currentUser,
  logout,
};
