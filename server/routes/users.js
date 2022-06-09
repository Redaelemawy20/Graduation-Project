import express from "express";
import multer from "multer";
import UserController from "../controllers/UserController";
import can from "../middlewares/can";

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./storage/users");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const mimetype = fileTypes.test(file.mimetype.toLowerCase());
  //   const extname = fileTypes.test(path.extname(file.originalname));
  console.log(mimetype, file.mimetype.toLowerCase());
  if (mimetype) {
    return cb(null, true);
  }
  cb("Error: El archivo debe ser una imagen válida");
};
const upload = multer({ storage: diskStorage, fileFilter: fileFilter });
const router = express.Router();

router.get("/", UserController.index);
router.get("/create", UserController.create);
router.post(
  "/create",
  can("manage users"),
  upload.single("avatar"),
  UserController.store
);
router.get("/:id/edit", UserController.edit);
router.get("/:id/view", UserController.view);
router.post(
  "/:id/edit",
  can("manage users"),
  upload.single("avatar"),
  UserController.update
);
export default router;
