const express = require("express");

const router = express.Router();

const stuffController = require("../controllers/stuff");

router.get("/", stuffController.getAllStuff);
router.post("/", stuffController.createThing);
router.get("/:id", stuffController.getOneThingById);
router.put("/:id", stuffController.updateThing);
router.delete("/:id", stuffController.deleteThing);

module.exports = router;
