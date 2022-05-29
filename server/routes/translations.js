import express from "express";
import TranslationController from "../controllers/TranslationController";
import can from "../middlewares/can";

const router = express.Router();

router.get("/", TranslationController.index);
router.post(
  "/update",
  can("manage translations"),
  TranslationController.update
);
router.get(
  "/add",
  can("manage translations", TranslationController.addLanguage)
);
export default router;
