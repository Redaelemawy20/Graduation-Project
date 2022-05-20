import path from "path";
import express from "express";
import { matchRoutes } from "react-router-dom";
import NewsRoutes from "./routes/news";
import AuthRoutes from "./routes/auth";
import UsersRoutes from "./routes/users";
import RolesRoutes from "./routes/roles";
import reactRenderer from "./services/reactRenderer";
import createStore from "./createStore";
import { routeObj } from "./client/Routes";
import React from "react";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import sequelizestore from "connect-session-sequelize";
import user from "./middlewares/user";
import axios from "axios";
import { setLoading } from "./client/actions";
const db = require("./models");
const SequelizeStore = sequelizestore(session.Store);
const app = express();
app.use(cors());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.set("Access-Control-Allow-Credentials", "true");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: db.sequelize,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);

app.use(user);

// api routess
app.use("/api/news", NewsRoutes);

app.use("/api/auth/", AuthRoutes);
app.use("/api/user/", UsersRoutes);
app.use("/api/role/", RolesRoutes);
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
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      cookie: req.get("cookie") || "",
    },
  });
  const store = createStore({}, axiosInstance);
  let matchedRoutes = matchRoutes(routeObj, req.path);
  if (!matchedRoutes) matchedRoutes = [];
  let promises = [];
  if (matchedRoutes.length === 0)
    return res.status(404).send("page not found not found");
  if (matchRoutes.length) {
    promises = matchedRoutes.map(({ route, params }) => {
      return (
        route.loadData &&
        store.dispatch(setLoading(true)) &&
        route.loadData(store, params)
      );
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
      const context = {};

      const content = reactRenderer(req, store, results, context);
      console.log(context);
      if (context.notFound) {
        res.status(404);
      }
      return res.send(content);
    });
  }
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
  db.sequelize.sync();
});
