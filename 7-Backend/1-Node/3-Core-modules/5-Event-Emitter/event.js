const EventEmitter = require("events");

const event = new EventEmitter();

// on("eventType", EventListenerFunction) => create event
// emit("eventType", arguments) => execute the event

// Event without parameter
// event.on("demo", () => {
//   console.log("This is a event without parameter");
// });

// event.emit("demo");

event.on("sample", (name, age) => {
  console.log(name, age);
});

event.emit("sample", "John", 23);
