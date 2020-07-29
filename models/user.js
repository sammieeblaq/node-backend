const Sequelize = require("sequelize");
const db = require("./index");

const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "user",
  }
);

module.exports = User;
