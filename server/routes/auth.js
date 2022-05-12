import express from "express";

import AuthController from "../controllers/AuthController";
const router = express.Router();

router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/current-user", AuthController.currentUser);
export default router;
