const express = require("express");
const { userController } = require("../controllers/user.controller");
const { authorizationController } = require("../controllers/auth.controller");
const { trackController } = require("../controllers/track.controller");
const { projectController } = require("../controllers/project.controller");
const router = express.Router();

router.post("/register", userController.addUser);
router.post("/login", userController.checkUser);
router.post("/auth", authorizationController.authorizate);
router.post("/track", trackController.addTrack);
router.post("/project", projectController.addProject);

router.get("/projects", projectController.getProjetcs);

module.exports = router;
