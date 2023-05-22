const { createJwt } = require("../middlewares/createJwtToken");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

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

const checkUserService = async (data) => {
  const { email, password, exp } = data;
  const user = await User.findOne({
    where: { email: email },
  });

  if (email) {
    if (password) {
      if (user) {
        const valid = bcrypt.compare(password, user.password);
        if (!(await valid)) {
          throw new Error("Incorrect password!");
        }
        const usersJwt = createJwt(user.id, user.username, user.email, exp);
        return usersJwt;
      } else {
        throw new Error("Incorrect email adress!");
      }
    } else {
      throw new Error("Password is missing!");
    }
  } else {
    throw new Error("Email is missing!");
  }
};

module.exports = { addUserService, checkUserService };
