const fs = require("fs");
const path = require("path");

//sync & async version

//todo: fs.readFile()
//  This method is used to read files on your computer.
// fs.readFile("../files/myScores.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

//todo: fs.writeFile()
//This method is used to write files on your computer
// fs.writeFile(
//   "../files/write.txt",
//   "This is the text I want to write",
//   (err) => {
//     if (err) throw err;
//     console.log("Your file has been written successfully");
//   }
// );

//todo: fs.appendFile()
//This method is used to write/append files on your computer
// fs.appendFile(
//   "../files/write.txt",
//   "This is the text I want to write2",
//   (err) => {
//     if (err) throw err;
//     console.log("Your file has been written successfully");
//   }
// );

//todo: fs.unlink()
// This method is use to delete a specified file:
// fs.unlink("../files/write.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });

//todo: fs.rename()
// This method is use to rename a file
// fs.rename("../files/write.txt", "../files/write.js", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

//todo: fs.mkdir()
//This method is used to create a new directory
// fs.mkdir(path.join(__dirname, "..", "files", "new_folder"), (err) => {
//     if (err) {
//         console.log("Failed to create directory");
//         console.log(err.message);
//     }
// });

//todo: fs.rmdir() & fs.rm{recursive, force}
//This method is used to remove a directory
// fs.rmdir(path.join(__dirname, "..", "files", "new_folder"), (err) => {
//   if (err) {
//     console.log("Failed to remove the directory");
//     console.log(err.message);
//   }
// });

// fs.rm("", { recursive: true, force: true }, (err) => {
//     if (err) {
//       console.log(`Error: ${err.message}`);
//     } else {
//       console.log("Successful");
//     }
//   });

//todo: fs.readdir()
//This method is used to read a directory
// fs.readdir(path.join(__dirname, "..", "files"), (err, files) => {
//   if (err) {
//     console.log(`Error Reading Directory: ${err.message}`);
//     return;
//   }
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

//todo: fs.exists()
// Determines whether the specified file exists or not.
// fs.exists(path.join(__dirname, "..", "files", "f", "test.txt"), (exists) => {
//   console.log(exists);
// });

//todo: fs.stat()
// Returns an object(fs.stats) which includes important file statistics.
// fs.stat(path.join(__dirname, "..", "files", "f", "test.txt"), (err, stats) => {
//   if (err) {
//     console.log(`Error(File Stats): ${err.message}`);
//     return;
//   }
//   console.log(stats);
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
// });

//todo: fs.createWriteStream() & fs.createReadStream()
//Which are use to read a large data in chunks
