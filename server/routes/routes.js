const express = require("express");
const { userController } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", userController.addUser);
router.post("/login", userController.checkUser);

module.exports = router;
