const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  // Log error message to a file
  logEvents(`${err.name}: ${err.message}`, "errorlog.txt");
  // Print error stack trace to console
  console.log(err.stack);
  // Send error response with status code 500
  res.status(500).send(err.message);
};

module.exports = { errorHandler };
