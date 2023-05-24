const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (authHeader) => {
  const token = authHeader.split(" ")[1];
  const key = process.env.SECRET_KEY;
  let decoded = {};
  if (!token) {
    throw new Error("Authorization error: no token");
  }

  try {
    decoded = jwt.verify(token, key);
  } catch (err) {
    throw new Error("Not authorized (bad token)");
  }
  return decoded;
};

module.exports = { authorization };
