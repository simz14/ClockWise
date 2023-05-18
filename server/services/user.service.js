const { User } = require("../models/user");

const addUserService = async (data) => {
  const { username, email, password } = data;

  if (username) {
    const usernameExists = await User.findOne({
      where: { username: username },
    });
    if (!usernameExists) {
      if (email) {
        const emailExists = await User.findOne({ where: { email: email } });
        if (!emailExists) {
          if (password) {
            try {
              await User.create({
                username: username,
                email: email,
                password: password,
              });
            } catch (err) {
              throw new Error(err.message);
            }
          } else {
            throw new Error("Password is missing!");
          }
        } else {
          throw new Error("Email already exists!");
        }
      } else {
        throw new Error("Email is missing!");
      }
    } else {
      throw new Error("Username already exists!");
    }
  } else {
    throw new Error("Username is missing!");
  }
};

module.exports = { addUserService };
