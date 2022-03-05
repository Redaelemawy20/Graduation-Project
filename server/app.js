const path = require("path");
const express = require("express");

const NewsRoutes = require("./routes/news");
const app = express();

require("./database/models/index");

app.use(express.static("public"));
app.engine("ejs", require("express-ejs-extend"));
app.use("/news", NewsRoutes);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/files", (req, res) => {
  console.log(req.query.file);
  const filePath = path.join(__dirname, "storage", req.query.file);
  res.sendFile(filePath);
});
app.get("/", (req, res) => {
  res.render("news", { title: "Hello" });
});
app.listen(3000);
