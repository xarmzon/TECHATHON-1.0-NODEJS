const fs = require("fs");
//todo: JavaScript provides error-handling mechanism to catch runtime errors
//todo: using try-catch-finally block, similar to other languages
// try {
//   // code that may throw an error
// } catch (ex) {
//   // code to be executed if an error occurs
// } finally {
//   // code to be executed regardless of an error occurs or not
// }

// try {
//   const result = parseJSON('A string');
// } catch (err) {
//   console.log(err.message); // Unexpected token A in JSON at position 0
// }

//todo: throw
// Use throw keyword to raise a custom error.
// try
// {
//     throw "Error occurred";
// }
// catch(err)
// {
//     console.log(err)
// }

// function parseJSON(data) {
//   return JSON.parse(data);
// }

//todo: But in NodeJs, we throw an Error Object

//todo: The error object is a built-in object in the Node.js runtime.
//todo: It gives you a set of info about an error when it happens.

//todo: Common examples include built-in error classes,
//todo: such as ReferenceError, RangeError, TypeError, URIError, EvalError, and SyntaxError

//todo: A basic error looks like this:
const error = new Error("An error message");
// console.log(error.name)
// console.log(error.message)
// console.log(error.stack)

//todo: or using throw
// throw new Error('database failed to connect');

// const userError = new TypeError("Something happened!");
// console.log(userError.name); // TypeError
// console.log(userError.message); // Something happened!
// console.log(userError.stack);

//todo: Extending the error object
//We can extends the builtin Error class to reflect the types of errors that could occur
//in your application

// class FancyError extends Error {
//     constructor(args){
//         super(args);
//         this.name = "FancyError"
//     }
// }

// class ApplicationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class ValidationError extends ApplicationError {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause
//   }
// }

// console.log(new Error('A standard error'))
// // { [Error: A standard error] }

// console.log(new FancyError('An augmented error'))
// // { [Your fancy error: An augmented error] name: 'FancyError' }

// function validateInput(input) {
//   if (!input) {
//     throw new ValidationError('Only truthy inputs allowed', input);
//   }

//   return input;
// }

// try {
//   validateInput(userJson);
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.error(`Validation error: ${err.message}, caused by: ${err.cause}`);
//     return;
//   }

//   console.error(`Other error: ${err.message}`);
// }

// function square(num) {
//   if (typeof num !== 'number') {
//     throw new TypeError(`Expected number but got: ${typeof num}`);
//   }

//   return num * num;
// }

// try {
//   square('8');
// } catch (err) {
//   console.log(err.message); // Expected number but got: string
// }

//todo: Handling async (callback) errors
// const name = "Rasta"
// function tester(req, callback) {
//         if (req==="Green") {
//             callback(new Error("No, Green not allow"),null);
//         } else {
//             callback(null, "Yes, We Love Rasta");
//         }

// }

// tester(name, (err,data)=>{
// 	console.log(err)
// 	console.log(data)
// })

//todo: handling Promise Errors
// function getData() {
//     return Promise.resolve('Do some stuff');
// }

// function changeDataFormat(){
//     // ...
// }

// function storeData(){
//     // ...
// }

// getData()
//     .then(changeDataFormat)
//     .then(storeData)
//     .catch((e) => {
//         // Handle the error!
// })

//todo: async try/catch
// Try/catch is by default synchronous.
// That means that if an asynchronous function throws an error
// in a synchronous try/catch block, no error throws.

// try {
//     throw new Error();
// } catch(e) {
//     console.log(e); // [Error]
// }

// try {
//     setTimeout(() => {
//         throw new Error();
//     }, 0);
// } catch(e) {
//     console.log(e); // Nothing, nada, zero, zilch, not even a sound
// }

//todo: async & await

// const doAsyncJobs = async () => {
//  try {
//    const result1 = await job1();
//    const result2 = await job2(result1);
//    const result3 = await job3(result2);
//    return await job4(result3);
//  } catch (error) {
//    console.error(error);
//  } finally {
//    await anywayDoThisJob();
//  }
// }

//todo: Uncaught exceptions and unhandled promise rejections
// process.on('uncaughtException', (err) => {
//   console.error(err);
// });
