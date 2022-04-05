import path from "path";
import express from "express";
import NewsRoutes from "./routes/news";
const app = express();
import reactRenderer from "./services/reactRenderer";
require("./database/models/index");

app.use(express.static("public"));

// api routes
app.use("/admin/news", NewsRoutes);

app.engine("ejs", require("express-ejs-extend"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));

app.get("/files", (req, res) => {
  const filePath = path.join(__dirname, "../", "storage", req.query.file);
  res.sendFile(filePath);
});

// website
app.get("/*", (req, res) => {
  return res.send(reactRenderer(req));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
