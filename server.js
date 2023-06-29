require("dotenv").config(); //ALLOWS ENVIROMENT VARIABLE TO BE SET ON PROCESS.ENV

const express = require("express");
const app = express();
const { logEvents, logger } = require("./middleware/logEvents");
const { errorHandler } = require("./middleware/errorHandler");

// logger
app.use(logger);

//middleware
app.use(express.json()); //parse json data

//Global error handler
app.use(errorHandler);

app.use("/scholarships", require("./routes/api/scholarships"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
