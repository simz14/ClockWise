const { authorization } = require("../middlewares/auth");

const authService = (authHeader) => {
  return authorization(authHeader);
};

module.exports = { authService };
