const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const NewsRoutes = require("./routes/news");
const app = express();

app.engine("ejs", require("express-ejs-extend"));
app.use("/news", NewsRoutes);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("news", { title: "Hello" });
});
app.listen(3000);
