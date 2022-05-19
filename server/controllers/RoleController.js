import { Role, Permission, User, Sequelize } from "../models";

async function index(req, res) {
  const roles = await Role.findAll({
    attributes: {
      include: [
        [
          Sequelize.fn("COUNT", Sequelize.col("Users.RoleId")),
          "users assigned",
        ],
      ],
    },
    include: [
      {
        model: User,
        attributes: [],
      },
    ],
    group: ["Role.id"],
  });
  return res.send(roles);
}
async function create(req, res) {
  const permissions = await Permission.findAll();
  return res.send({ permissions });
}
async function store(req, res) {
  const { name, permissions } = req.body;
  if (!name) return res.status(400).send("Role name  is required");
  const newRole = await Role.create({ name });

  let assignedPermissions = getAssignedPermissions(permissions);
  if (assignedPermissions.length)
    await newRole.setPermissions(assignedPermissions);
  return res.send("role created!");
}
async function edit(req, res) {
  const { id } = req.params;
  const role = await Role.findByPk(id, {
    include: Permission,
  });

  if (!role) return res.status(404).send("this role has been deleted");
  const allPermissions = await Permission.findAll();
  const permissions = [];
  for (let permission of allPermissions) {
    const found = role.Permissions.find((p) => {
      return p.id == permission.id;
    });
    let x = {
      id: permission.id,
      name: permission.name,
      description: "until we put description",
    };
    if (found) x.checked = true;
    permissions.push(x);
  }

  return res.send({ permissions, role });
}
async function update(req, res) {
  const { id } = req.params;
  const { name, permissions } = req.body;
  const role = await Role.findByPk(id, {
    include: Permission,
  });
  if (!role) return res.status(404).send("this role has been deleted");
  if (!name) return res.status(400).send("Role name  is required");
  let assignedPermissions = getAssignedPermissions(permissions);
  await role.update({ name });
  await role.setPermissions(assignedPermissions);
  return res.send("updated sucessfully");
}
function getAssignedPermissions(permissions) {
  if (!permissions) permissions = [];
  let assignedPermissions = [];
  permissions.map((permission) => {
    if (permission.checked) assignedPermissions.push(permission.id);
  });
  return assignedPermissions;
}

export default {
  index,
  create,
  update,
  store,
  edit,
};
