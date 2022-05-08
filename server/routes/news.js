import express from "express";
import NewsContrller from "../controllers/NewsController";
const router = express.Router();

const { newsStorage } = require("../util/multerStorage");

router.get("/", NewsContrller.index);

router.get("/create", NewsContrller.create);

router.post(
  "/create",
  newsStorage.fields([
    {
      name: "mainImage",
      maxCount: 1,
    },
    {
      name: "files",
      maxCount: 4,
    },
  ]),
  NewsContrller.store
);

router.get("/:id/edit", NewsContrller.edit);

router.put(
  "/:id/update",
  newsStorage.fields([
    {
      name: "mainImage",
      maxCount: 1,
    },
    {
      name: "files",
      maxCount: 4,
    },
  ]),
  NewsContrller.update
);
router.delete("/:id/deleteFile", NewsContrller.deleteFile);
router.delete("/delete", NewsContrller.destroy);

export default router;
