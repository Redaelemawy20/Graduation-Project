import { User } from "../models";
import bcrypt from "bcryptjs";
async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    return res.status(404).send({ message: "invalid credentials" });
  }
  try {
    const result = await bcrypt.compare(password, user.password);
    if (!result)
      return res.status(401).send({ message: "invalid credentials" });
  } catch (error) {
    return res.status(500).send({ message: "internal server error" });
  }
  req.session.user = user;
  return res.send(user);
}

async function logout(req, res) {
  req.session.destroy((err) => {
    if (err) return res.status(404).send({ message: "no user to log out" });
    return res.send("user logged out");
  });
}

async function reset(req, res) {
  const user = await User.findByPk(req.user.id);
  const old = user.password;
  const claimedPassword = req.body.old;
  try {
    const equals = await bcrypt.compare(old, claimedPassword);
    if (!equals)
      return res
        .status(401)
        .send({ message: "your current password is not correct" });
  } catch (error) {
    return res.status(500).send({ message: "internal server error" });
  }
  const newHashedPassword = await bcrypt.hash(req.body.new, 10);
  await user.update({ password: newHashedPassword });
  req.session.destroy((err) => {
    if (err) res.status(404).send({ message: "no user to log out" });
    return res.send("what do you see");
  });
}

async function currentUser(req, res) {
  // return res.send(req.headers);
  return res.send(req.user);
}

export default {
  login,
  currentUser,
  logout,
  reset,
};
