const {
  addUserService,
  checkUserService,
} = require("../services/user.service");

const userController = {
  async addUser(req, res) {
    try {
      await addUserService(req.body);
      res.status(201).json({ message: "Successful." });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async checkUser(req, res) {
    try {
      const serviceResult = await checkUserService(req.body);
      res.status(200).json({ jwt: serviceResult });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { userController };
