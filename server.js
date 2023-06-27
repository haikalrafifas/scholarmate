require("dotenv").config(); //ALLOWS ENVIROMENT VARIABLE TO BE SET ON PROCESS.ENV

const express = require("express");
const app = express();
const pool = require("./config/db"); //

//middleware
app.use(express.json()); //parse json data

// Temporarily disabled for remote MySQL testing
/*
//Global error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(err.status || 500);
  res.json({
    status: err.status,
    message: err.message,
  });
});
*/

app.get("/api", async (req, res, next) => {
  try {
    let sql = "SELECT * FROM beasiswa LIMIT 10";

    const [rows, fields] = await pool.execute(sql);

    res.json(rows);
  } catch (err) {
    next(err);
  }
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PROT ${PORT}`));
