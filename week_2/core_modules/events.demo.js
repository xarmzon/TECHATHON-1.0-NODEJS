const EventEmitter = require("events");
const fs = require("fs");
const { addListener } = require("process");

//todo: Creating EventEmitters
//This can be done either via creating an instance of the class itself,
//or by implementing it through a custom class and then creating an instance of that class.
const door = new EventEmitter();

class Logger extends EventEmitter {
  constructor() {
    super();
    this.name = this.constructor.name;
  }

  log(msg) {
    this.emit("log", this.name, msg);
  }
}
const logger = new Logger();

//todo: emitter.on() & emitter.addListener()
// Adds a callback function that's called when an event is emitted.
// logger.on("log", (name, msg) => {
//   console.log(`${name}: ${new Date().toISOString()}---> ${msg}`);
// });

door.on("open", (by) => {
  console.log(`Master, ${by} Just open me!`);
});

door.on("open", () => {
  console.log("Yess, I will work too for open");
});
door.on("close", (by) => {
  console.log(`Master, ${by} Just close me!`);
});
door.on("jam", (by) => {
  console.log(`Master, ${by} Just jammed me and it hurts!`);
});
door.on("arrive on time", () => {});

door.addListener("leave", (house) => {
  console.log(
    `\nI'm Leaving this house\nHouse No. ${house?.no || "0"}\nAddress: ${
      house?.address || "Unknown"
    }\n`
  );
});

// emit("event_name", param1, param2, param3);

door.addListener("locked", (by, message) => {
  console.log(
    `This door is locked by ${by} and here is the message for you: '${message}'`
  );
});

///todo: emitter.emit()
// Emits an event.
//It synchronously calls every event listener in the order they were registered.
// emitter.emit(eventName,param1,parm2,parm3)
// door.emit("jam", "Rasta");
// door.emit("jam", "Green");
// door.emit("jam", "Kabir");
// door.emit("jam", "Tosin");
// door.emit("jam", "Ezekiel");
// door.emit("leave");
// door.emit("leave", { address: "Ilorin", no: "2555" });
// door.emit("locked", "Rasta", "Please come back tomorrow");
// logger.log("This is Techathon NodeJS Track ");

//todo: emitter.eventNames()
// Return an array of strings that represent the events registered on the current
//EventEmitter object:
// const names = door.eventNames();
// console.log(names);

//todo: emitter.getMaxListeners()
// Get the maximum amount of listeners one can add to an EventEmitter object,
//which defaults to 10 but can be increased or lowered by using setMaxListeners()
// const maxL = door.getMaxListeners();
// console.log(maxL);

//todo: emitter.listenerCount()
// Get the count of listeners of the event passed as parameter:
// const oCount = door.listenerCount("close");
// console.log(oCount);

//todo: emitter.listeners()
// Gets an array of listeners of the event passed as parameter:
// const oL = door.listeners("open");
// console.log(oL);

//todo: emitter.off() & emitter.removeListener();
// Remove a specific listener.
//You can do this by saving the callback function to a variable,
//when added, so you can reference it later:
// const doSomething = () => {};
// door.on('open', doSomething);
// door.removeListener('open', doSomething);
// door.emit("open")

//todo: emitter.once()
//Adds a callback function that's called when an event is emitted for the first time.
//This callback is only going to be called once, never again.
door.once("force jam", () => {
  console.log("Jammed for life");
});

// door.emit("force jam");
// door.emit("force jam");

//todo: emitter.prependListener()
// When you add a listener using on or addListener, it's added
//last in the queue of listeners, and called last.
//Using prependListener it's added, and called, before other listeners.
// door.prependListener("locked", () => {
//   console.log("Yes, I said so. I'm bigger than them");
// });
// door.emit("locked");

//todo: emitter.prependOnceListener()
//Just like the previous one but works with once
// door.prependOnceListener("force jam", () => {
//   console.log("Yes, I will lock and jam. I'm bigger than them");
// });
// door.emit("force jam");

//todo: emitter.removeAllListeners()
//Removes all listeners of an EventEmitter object listening to a specific event
// door.removeAllListeners();
// door.removeAllListeners('open');

//todo: emitter.setMaxListeners()
// Sets the maximum amount of listeners one can add to an EventEmitter object,
// which defaults to 10 but can be increased or lowered.
// door.setMaxListeners(50);
// console.log(door.getMaxListeners());

//todo: The event listener has these in-built events:
// newListener: when a listener is added
// removeListener: when a listener is removed

//todo: Error Handling
// If you want to emit an error with your EventEmitter,
// it must be done with an error event-name.
// door.on("error", (e) => {
//   console.log(e);
// });

// door.emit("error", new Error("Haaaaaaaa"));

// todo: Let's take a look at some classic Stream usage
// const writer = fs.createWriteStream("../files/myStream.txt");

// for (let i = 0; i < 100000; i++) {
//   writer.write(`hello, #${i}!\n`);
// }

// writer.on("error")
// writer.on("finish", () => {
//   console.log("All writes are now complete.");
// });

// writer.end("This is the end\n");

//todo: Other events, such as error, pipe and unpipe
