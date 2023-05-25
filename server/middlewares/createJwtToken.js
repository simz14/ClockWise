const jwt = require("jsonwebtoken");

// create token with or without expiration and with just the safe data

const createJwt = (id, username, email, exp) => {
  let payload = {
    userId: id,
    username: username,
    email: email,
  };

  return jwt.sign(payload, process.env.SECRET_KEY, !exp && { expiresIn: "1h" });
};

module.exports = { createJwt };
