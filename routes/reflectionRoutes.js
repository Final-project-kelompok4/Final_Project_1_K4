const express = require("express");
const reflectionsController = require("../controllers/reflectionControllers");
const verifyToken = require("../middleware/auth");
const router = express.Router();

// Rute reflection
router.post("/", verifyToken, reflectionsController.createReflection);
router.get("/", verifyToken, reflectionsController.getReflection);
router.put("/:id", verifyToken, reflectionsController.updateReflection);
router.delete("/:id", verifyToken, reflectionsController.deleteReflection);

module.exports = router;
