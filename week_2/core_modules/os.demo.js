const os = require("os");

//TODO: os.arch()
// Return the string that identifies the underlying
//architecture, like arm, x64, arm64.
// const arch = os.arch();
// console.log(arch);

//TODO: os.cpus()
// Return information on the CPUs available on your system.
// const cpus = os.cpus();
// console.log(cpus);

//TODO: os.freemem()
// Return the number of bytes that represent the free memory in the system.
const freemem = os.freemem();
console.log(freemem);

//todo: os.totalmem()
// Returns the number of bytes that represent the total memory available in the system.
const totalmem = os.totalmem();
console.log(totalmem);

//todo: os.homedir()
// Return the path to the home directory of the current user.
// const homedir = os.homedir();
// console.log(homedir);

//todo: os.hostname()
// Return the hostname.
// const hostname = os.hostname();
// console.log(hostname);

//todo: os.platform();
// Return the platform that Node was compiled for:
// darwin, freebsd, linux, openbsd, win32
// const platform = os.platform();
// console.log(platform);

//todo: os.tmpdir()
// Returns the path to the assigned temp folder.
// const tmpdir = os.tmpdir();
// console.log(tmpdir);

//todo: os.type()
//Identifies the operating system:
// Linux, Darwin on macOS, Windows_NT on Windows
// const type = os.type();
// console.log(type);

//todo: os.uptime()
// Returns the number of seconds the computer has been running
//since it was last rebooted
const uptime = os.uptime();
console.log(uptime);

//todo: os.userInfo()
// Returns information about the current user
// const userInfo = os.userInfo();
// console.log(userInfo);
