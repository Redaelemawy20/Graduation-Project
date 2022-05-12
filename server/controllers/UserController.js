import { Role, Permission, User } from "../models";

async function index(req, res) {}
async function create(req, res) {
  const role = await Role.findOne({
    where: {
      id: 2,
    },
    include: Permission,
  });
  await role.removePermissions({ name: "manage roles" });
  return res.send(role);
}
async function store(params) {}
async function edit(params) {}
async function update(params) {}

export default {
  index,
  create,
  store,
  edit,
  update,
};
