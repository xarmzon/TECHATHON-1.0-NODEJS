const fs = require("fs");
const path = require("path");

//todo: sync & async version
// fs.open() fs.close()

//todo: fs.readFile() & fs.readFileSync
//  This method is used to read files on your computer.
fs.readFile("../files/myScores.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
fs.readFile("../files/hello.js", (err, data) => {
  console.log(err);
  //   if (err) throw err;
  console.log(data.toString());
});

// todo: fs.writeFile() fs.writeFileSync
//This method is used to write files on your computer
// fs.writeFile(path, data, callback)
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
//   "\nS/N\t\tNames\t\tAge\n1\t\tRasta\t\t2\n",
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
// rename(oldPath, newPath);
// fs.rename("../files/write.js", "../files/f/myScores.js", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

//todo: fs.mkdir()
//This method is used to create a new directory
// fs.mkdir(
//   path.join(__dirname, "..", "files", "new_folder", "inside", "new"),
//   (err) => {
//     if (err) {
//       console.log("Failed to create directory");
//       console.log(err.message);
//       return;
//     }
//     console.log("Folder created successfully");
//   }
// );
// console.log(path.resolve("..", "files", "new_folder"));

//todo: fs.rmdir() & fs.rm{recursive, force}
//This method is used to remove a directory
// fs.rmdir(path.join(__dirname, "..", "files", "not_empty"), (err) => {
//   if (err) {
//     console.log("Failed to remove the directory");
//     console.log(err.message);
//     return;
//   }
//   console.log("Folder deleted successfully");
// });

// fs.rm(
//   path.join(__dirname, "..", "files", "not_empty"),
//   { recursive: true, force: true },
//   (err) => {
//     if (err) {
//       console.log(`Error: ${err.message}`);
//     } else {
//       console.log("Successful");
//     }
//   }
// );

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
// fs.exists(
//   path.join(__dirname, "..", "files", "f", "test.txtxxxxxx"),
//   (exists) => {
//     console.log(exists);
//   }
// );

// console.log(fs.existsSync(path.resolve("..", "files", "hello1.js")));

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

//todo: copy file
// fs.copyFile()
//todo: copies files and folder
// fs.cp()

//todo: fs.createWriteStream() & fs.createReadStream()
//Which are use to read a large data in chunks
