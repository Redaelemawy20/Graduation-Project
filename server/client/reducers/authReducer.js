import { FETCH_CURRENT_USER } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
}
export function can(currentUser, claimedPermission = "") {
  if (!currentUser) return false;
  let can = currentUser.permissions.find((permission) => {
    return permission.name === claimedPermission;
  });
  if (!can) return false;
  return true;
}
export function isSuperAdmin(currentUser) {
  if (!currentUser) return false;
  return currentUser.RoleId === 1;
}
export function hasEqualRoleWithCurrent(currentUser, role) {
  if (!currentUser) return true;
  if (role === 1 || role === "super admin") return true;
  return role === currentUser.Role.id || role === currentUser.Role.name;
}
