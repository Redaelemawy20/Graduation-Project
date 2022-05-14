import express from "express";
import UserController from "../controllers/UserController";
import can from "../middlewares/can";

const router = express.Router();

router.get("/", UserController.index);
router.get("/create", UserController.create);
router.post("/create", can("manage users"), UserController.store);
router.get("/:id/edit", UserController.edit);
router.post("/:id/edit", can("manage users"), UserController.update);
export default router;
