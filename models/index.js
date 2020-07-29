// const mysql2 = require("mysql2");
const Sequelize = require("sequelize");

module.exports = new Sequelize("test", "username", "password", {
  host: "192.168.64.2",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
