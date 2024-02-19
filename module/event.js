const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const emitter = new Emitter();

emitter.on("comment", () => {
  console.log("Server commentend");
});

// emitter.emit("comment")

emitter.on("hi", (name) => console.log("Hi my name is ", name));

emitter.emit("hi", "Izzatbek")