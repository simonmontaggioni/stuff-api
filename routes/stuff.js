const express = require("express");

const router = express.Router();

const stuffController = require("../controllers/stuff");
const authMiddleware = require("../middlewares/auth");
const multerMiddleware = require("../middlewares/multer-config");

router.get("/", authMiddleware, stuffController.getAllStuff);
router.post("/", authMiddleware, multerMiddleware, stuffController.createThing);
router.get("/:id", authMiddleware, stuffController.getOneThingById);
router.put(
  "/:id",
  authMiddleware,
  multerMiddleware,
  stuffController.updateThing
);
router.delete("/:id", authMiddleware, stuffController.deleteThing);

module.exports = router;
