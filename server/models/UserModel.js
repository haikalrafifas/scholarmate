const Sequilize = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequilize;

const Users = db.define(
  "users",
  {
    nama_lengkap: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true }
);

module.exports = Users;
