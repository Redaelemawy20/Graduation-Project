import express from "express";
import RoleController from "../controllers/RoleController";
import can from "../middlewares/can";

const router = express.Router();

router.get("/", RoleController.index);
router.get("/create", RoleController.create);
router.post("/create", can("manage roles"), RoleController.store);
router.get("/:id/edit", RoleController.edit);
router.post("/:id/edit", can("manage roles"), RoleController.update);
export default router;
