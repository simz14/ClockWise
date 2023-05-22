const jwt = require("jsonwebtoken");

const createJwt = (id, username, email) => {
  let payload = {
    userId: id,
    username: username,
    email: email,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "120s" });
};

module.exports = { createJwt };
