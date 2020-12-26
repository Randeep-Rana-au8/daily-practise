const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("hibuddy", function () {
  console.log("Hey Emitter is working");
});

emitter.emit("hibuddy");
