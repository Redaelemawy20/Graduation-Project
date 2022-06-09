function can(claimedPermission) {
  return (req, res, next) => {
    const { user } = req;
    if (user) {
      let can = user.permissions.find((permission) => {
        return permission.name === claimedPermission;
      });

      if (!can) {
        return res
          .status(401)
          .send({
            message: `your don't have the permission to ${claimedPermission}`,
          });
      }
      return next();
    }
    return res
      .status(401)
      .send({ message: "we don't know you please login first" });
  };
}
export default can;
