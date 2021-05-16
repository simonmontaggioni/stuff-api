const express = require("express");

const router = express.Router();

const stuffController = require("../controllers/stuff");
const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, stuffController.getAllStuff);
router.post("/", authMiddleware, stuffController.createThing);
router.get("/:id", authMiddleware, stuffController.getOneThingById);
router.put("/:id", authMiddleware, stuffController.updateThing);
router.delete("/:id", authMiddleware, stuffController.deleteThing);

module.exports = router;
