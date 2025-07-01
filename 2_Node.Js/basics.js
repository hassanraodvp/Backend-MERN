const fs = require("fs");

//! writeFile (To create file)
fs.writeFile("createFile.js", 'alert("hello world")', (err) => {
  if (err) console.log(err);
  else console.log("File written successfully\n");
});
//! appendFile (To add text in file)
fs.appendFile("createFile.js", ' console("Hello! Hassan")', (err) => {
    if (err) console.log(err);
    else console.log("File written successfully\n");
  });
//! renameFile (to rename file)
fs.rename("createFile.js", "createFile1.js", (err) => {
    if (err) console.log(err);
    else console.log("File renamed successfully\n");
  });
//! copyFile (to copy file from one file/folder to another file/folder)
  fs.copyFile("createFile1.js", "./copy/copyFile.js", (err) => {
    if (err) console.log(err);
    else console.log("File copied successfully\n");
  })
//! unLink (To remove file)
  fs.unlink("createFile.js", (err) => {
    if (err) console.log(err);
    else console.log("File deleted successfully\n");
  })
//! rmdir (To remove folder only if it is empty, if it is not empty we must add {recursive: true} in it.)
  fs.rm("copy", {recursive: true}, (err) => {
    if (err) console.log(err);
    else console.log("Folder deleted successfully\n");
  })
//! mkdir (To create folder)
fs.mkdir("copy", (err) => {
  if (err) console.log(err);
  else console.log("Folder created successfully\n");
});
//! readFile (To read file in utf-8 format without utf8 it will give us buffer format)
fs.readFile("createFile.js", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});


//! http & https
// http
const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello World!");
});

server.listen(8000, "", () => {
    console.log("Server is running on port 8000");
});
