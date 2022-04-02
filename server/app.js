import path from "path";
import express from "express";
import NewsRoutes from "./routes/news";
const app = express();
import reactRenderer from "./services/reactRenderer";
require("./database/models/index");

app.use(express.static("public"));
app.use("/news", NewsRoutes);

app.engine("ejs", require("express-ejs-extend"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));
app.get("/files", (req, res) => {
  console.log(req.query.file);
  const filePath = path.join(__dirname, "storage", req.query.file);
  res.sendFile(filePath);
});

// anthor routes
app.get("/admin/api", (req, res) => {
  return res.send("api");
});

// admin dashboard
app.get("/*", (req, res) => {
  return res.send(reactRenderer(req));
});

app.listen(4000, () => {
  console.log("Listening on port 3000");
});
