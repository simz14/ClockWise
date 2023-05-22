const jwt = require("jsonwebtoken");

const createJwt = (id, username, email, exp) => {
  let payload = {
    userId: id,
    username: username,
    email: email,
  };
  console.log(exp);
  return jwt.sign(payload, process.env.SECRET_KEY, !exp && { expiresIn: "1h" });
};

module.exports = { createJwt };
