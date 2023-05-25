const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connection");

const Project = sequelize.define(
  "Project",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

module.exports = { Project };
