const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../database/connection");

const Track = sequelize.define(
  "Track",
  {
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Track };
