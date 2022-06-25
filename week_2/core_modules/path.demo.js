const path = require("path");

//TODO: path.basename()
// Return the last portion of a path.
//A second parameter can filter out the file extension:
// const b1 = path.basename("/test/something");
// const b2 = path.basename("/test/something.txt");
// const b3 = path.basename("/test/something.txt", ".txt");
// console.log(b1);
// console.log(b2);
// console.log(b3);

//TODO: path.dirname()
// Return the directory part of a path:

// const d1 = path.dirname("/test/something");
// const d2 = path.dirname("/test/something/file.txt");
// console.log(d1);
// console.log(d2);

//TODO: path.extname()
// Return the extension part of a path

// const e1 = path.extname("/test/something.js");
// const e2 = path.extname("/test/something/file.txt");
// console.log(e1);
// console.log(e2);

//TODO: path.isAbsolute()
// Returns true if it’s an absolute path

// const i1 = path.isAbsolute("/test/something");
// const i2 = path.isAbsolute("./test/something");
// console.log(i1);
// console.log(i2);

//TODO: path.parse()
// Parses a path to an object with the segments that compose it:
// root: the root
// dir: the folder path starting from the root
// base: the file name + extension
// name: the file name
// ext: the file extension

// const p = path.parse("/users/test.txt");
// console.log(p);

//todo: path.format()
// Returns a path string from an object,
// This is the opposite of path.parse
// path.format accepts an object as argument
// with the following keys:

// root: the root
// dir: the folder path starting from the root
// base: the file name + extension
// name: the file name
// ext: the file extension
// root is ignored if dir is provided
// ext and name are ignored if base exists

// const p = path.format({
//   root: "/Users/rasta/xarm/",
//   name: "test",
//   ext: ".txt",
// });
// console.log(p);

//TODO: path.join()
// Joins two or more parts of a path:

// const name = "rasta";
// const j = path.join("/", "users", name, "notes.txt");
// console.log(j);

//TODO: path.resolve()
// You can get the absolute path calculation of a relative path using
//path.resolve() based on the current directory

// const r1 = path.resolve("user", "xarm", "techathon.txt");
// const j1 = path.join("user", "xarm", "techathon.txt");
// console.log(r1);
// console.log(j1);

// const r2 = path.resolve("tmp", "techathon.txt");
// console.log(r2);

// If the first parameter starts with a slash, that means it’s an absolute path:
// const r3 = path.resolve("/etc", "xarm", "rast", "techathon.txt");
// console.log(r3);
