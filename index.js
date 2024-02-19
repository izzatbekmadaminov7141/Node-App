const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log("Logger: ", data);
});

logger.log("POST", "/users/login");
