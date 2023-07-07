const Sequilize = require("sequelize");

const db = new Sequilize("scholarmate", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
