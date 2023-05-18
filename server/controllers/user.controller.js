const { addUserService } = require("../services/user.service");

const userController = {
  async addUser(req, res) {
    try {
      await addUserService(req.body);
      res.status(201).json({ message: "Successful." });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { userController };
