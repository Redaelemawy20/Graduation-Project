const multer = require("multer");
const path = require("path");
const fs = require("fs");

const fileFilters = (req, file, callback) => {
  const { fieldname, mimetype } = file;
  if (fieldname === "files") {
  }
  if (fieldname === "mainImage") {
  }
  callback(null, true);
};
const newsStorage = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      let dest = [__dirname, "../", "storage", "news"];
      if (file.fieldname === "mainImage") dest.push("mainImage");
      else dest.push("files");
      fs.exists(path.join(...dest), (exists) => {
        if (!exists) fs.mkdirSync(path.join(...dest));
        cb(null, path.join(...dest));
      });
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  }),
  fileFilter: fileFilters,
});
module.exports = {
  newsStorage,
};
