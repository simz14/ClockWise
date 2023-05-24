const { authService } = require("../services/auth.service");

const authorizationController = {
  async authorizate(req, res) {
    try {
      const response = authService(req.headers.authorization);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { authorizationController };
