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
router.post(
  "/add",
  can("manage translations"),
  TranslationController.addLanguage
);
router.get("/getLangs", TranslationController.getLangs);
export default router;
