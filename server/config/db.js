require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Temporarily disabled for remote MySQL testing
/*
let sql = "SELECT * FROM beasiswa LIMIT 10";

pool.execute(sql, function (err, result) {
  if (err) throw err;

  console.log(result);
});
*/

module.exports = pool.promise();
