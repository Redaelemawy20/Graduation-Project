import { Role, Permission, User } from "../models";

async function index(req, res) {
  const users = await User.findAll({
    include: Role,
    attributes: {
      exclude: ["password"],
    },
  });

  return res.send({ users });
}
async function create(req, res) {
  const roles = await getAllRoles();
  return res.send({ roles });
}
async function store(req, res) {
  const { name, email, role } = req.body;
  if (!name || !email || !role) {
    return res.status(400).send("name, email and role are required");
  }
  let avatar = null;
  if (req.file) avatar = req.file.filename;
  const userInserted = await User.create({
    name,
    email,
    avatar,
    password: "password",
  });
  await userInserted.setRole(role);
  return res.send("user added successfully");
}
async function edit(req, res) {
  const { id } = req.params;

  const user = await User.findByPk(id, {
    attributes: {
      exclude: ["password"],
    },
  });

  const roles = await getAllRoles();

  return res.send({ user, roles });
}
async function update(req, res) {
  const { name, email, role } = req.body;
  const { id } = req.params;
  if (!name || !email || !role) {
    return res.status(400).send("name, email and role are required");
  }
  let updatedUser = await User.findByPk(id);
  if (!updatedUser) return res.status(404).send("user deleted");
  let avatar = updatedUser.avatar;
  if (req.file) avatar = "users/" + req.file.filename;
  await updatedUser.update({
    name,
    email,
    avatar,
    RoleId: role,
  });
  return res.send("user updated successfully");
}
async function getAllRoles() {
  const roles = await Role.findAll({
    include: Permission,
  });
  return roles;
}

export default {
  index,
  create,
  store,
  edit,
  update,
};
