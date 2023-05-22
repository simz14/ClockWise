const express = require("express");
const { userController } = require("../controllers/user.controller");
const { authorizationController } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", userController.addUser);
router.post("/login", userController.checkUser);
router.post("/auth", authorizationController.authorizate);

module.exports = router;
