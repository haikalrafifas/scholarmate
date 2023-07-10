const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const { logEvents, logger } = require("./middleware/logEvents");
const { errorHandler } = require("./middleware/errorHandler");
const db = require("./config/db");
dotenv.config(); //ALLOWS ENVIROMENT VARIABLE TO BE SET ON PROCESS.ENV

try {
  db.authenticate();
  console.log("Database connected!");
} catch (error) {
  console.error(error);
}

const PORT = process.env.PORT || 3001;

// logger
app.use(logger);

//middleware
app.use(express.json()); //parse json data
// cookie parser
app.use(cookieParser());
// cors
app.use(cors({ credentials: true, origin: `http://localhost:${PORT}` }));

// //Global error handler
app.use(errorHandler);

app.use("/scholarships", require("./routes/api/scholarships"));
// app.use("/program-studi", require("./routes/api/programStudi"));
app.use("/users", require("./routes/api/user"));
app.use("/profil-jurusan", require("./routes/api/profilJurusan"));
app.use("/", (req, res) => res.json({"error": "invalid parameter"}));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
