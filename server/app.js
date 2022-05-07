import path from "path";
import express from "express";
import { matchRoutes } from "react-router-dom";
import NewsRoutes from "./routes/news";
import reactRenderer from "./services/reactRenderer";
import createStore from "./createStore";
import { routeObj } from "./client/Routes";
import React from "react";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

require("./database/models/index");

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// api routess
app.use("/admin/news", NewsRoutes);

app.engine("ejs", require("express-ejs-extend"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));

app.get("/files", (req, res) => {
  const filePath = path.join(__dirname, "../", "storage", req.query.file);
  return res.sendFile(filePath);
});
app.get("/favicon.ico", (req, res) => {
  return res.send("no");
});
// website & dashboard => react router
app.get("/*", (req, res) => {
  const store = createStore();
  let matchedRoutes = matchRoutes(routeObj, req.path);
  if (!matchedRoutes) matchedRoutes = [];
  console.log(matchedRoutes);
  let promises = [];
  if (matchRoutes.length) {
    promises = matchedRoutes.map(({ route, params }) => {
      return route.loadData && route.loadData(store, params);
    });
    Promise.all(promises).then((results) => {
      results.map((data, index) => {
        if (data) {
          matchedRoutes[index].route.element = React.cloneElement(
            matchedRoutes[index].route.element,
            { ...data }
          );
        }
      });

      return res.send(reactRenderer(req, store, results));
    });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
