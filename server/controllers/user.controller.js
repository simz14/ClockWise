const { addUserService } = require("../services/user.service");

const userController = {
  async addUser(req, res) {
    try {
      await addUserService(req.body);
      res.status(201).json({ message: "Successful registration." });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },
};

module.exports = { userController };
