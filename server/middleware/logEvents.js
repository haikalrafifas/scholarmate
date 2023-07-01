const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message, logName) => {
  // Get the current date and time in the specified format
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;

  // Generate a unique identifier for the log item
  const logId = uuid();
  // Create the log item string with the date, logId, and message
  const logItem = `${dateTime}\t${logId}\t${message}\n`;
  try {
    // Check if the logs directory exists, create it if it doesn't
    const logsDir = path.join(__dirname, "../", "logs");
    if (!fs.existsSync(logsDir)) {
      await fsPromises.mkdir(logsDir);
    }
    // Append the log item to the specified log file
    const logFilePath = path.join(logsDir, logName);
    await fsPromises.appendFile(logFilePath, logItem);
  } catch (err) {
    // Log any errors that occur during the process
    console.log(err);
  }
};

const logger = (req, res, next) => {
  // Extract the method, origin, and URL from the request object
  const {
    method,
    headers: { origin },
    url,
  } = req;

  // Create the log message by concatenating the method, origin, and URL
  const logMessage = `${method}\t${origin}\t${url}`;

  // Call the logEvents function with the log message and the log file name
  logEvents(logMessage, "requestlog.txt");
  // Call the next middleware function in the chain
  next();
};

module.exports = { logEvents, logger };
