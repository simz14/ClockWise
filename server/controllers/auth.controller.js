const { authService } = require("../services/auth.service");

const authorizationController = {
  async authorizate(req, res) {
    try {
      authService(req.headers.authorization);
      res.status(200).json({ message: "Success" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { authorizationController };
