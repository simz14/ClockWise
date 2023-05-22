const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (authHeader) => {
  if (!authHeader) {
    throw new Error("Authorization error: no token");
  }

  let token = authHeader.split(" ")[1];
  let key = process.env.SECRET_KEY;
  let decoded = {};
  console.log(jwt.verify(token, key));
  try {
    decoded = jwt.verify(token, key);
  } catch (err) {
    throw new Error("Not authorized (bad token)");
  }
  return decoded;
};

module.exports = { authorization };
