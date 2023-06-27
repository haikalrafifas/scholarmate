require("dotenv").config(); //ALLOWS ENVIROMENT VARIABLE TO BE SET ON PROCESS.ENV

const express = require("express");
const app = express();

//middleware
app.use(express.json()); //parse json data

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

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PROT ${PORT}`));
