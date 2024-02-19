const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(method, route) {
    this.emit("message", { method, route });
  }
}

module.exports = Logger;
