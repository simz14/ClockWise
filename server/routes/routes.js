const express = require("express");
const { userController } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", userController.addUser);

module.exports = router;
