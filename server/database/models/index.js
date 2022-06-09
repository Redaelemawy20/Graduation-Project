const database = require("../../services/db_connection");

const User = require("./User");
const File = require("./File");
const Feed = require("./Feed");
File.belongsTo(Feed, { constraints: true, onDelete: "CASCADE" });
Feed.hasMany(File);
database
  .sync()
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.log("Error while synchronization");
    console.log(error);
  });
