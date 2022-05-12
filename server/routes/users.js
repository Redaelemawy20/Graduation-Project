import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get("/", UserController.index);
router.get("/create", UserController.create);
router.post("/create", UserController.store);
router.get("/:id/edit", UserController.edit);
router.post("/:id/edit", UserController.update);
export default router;
