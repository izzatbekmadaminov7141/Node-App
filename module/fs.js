const fs = require("fs");
const path = require("path");

// papka ochish
// fs.mkdir(path.join(__dirname,"papka"),{},(error) => {
//     if(error) throw error;
//     console.log("vazifa bajarildi..")
// })

// file ochish va unga matin yozish
// fs.writeFile(
//   path.join(__dirname, "/papka","test.txt"),
//   "papka ochildi Node js orqalik",
//   (error) => {
//     if (error) throw error
//     console.log("Node orqalik file ochildi..")
//   }
// );

// fili ichidan davom etrish
// fs.appendFile(path.join(__dirname,"papka","test.txt"),"\n wack up Neo ... ",(error) => {
//     if (error) throw error;
//     console.log("Uyg'on Neo ...")
// })

// file ichidagi malumotni o'qish
// fs.readFile(path.join(__dirname, "papka", "test.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// file nomini almashtrish uchun
// fs.rename(
//   path.join(__dirname, "/papka", "almashdi.text"),
//   path.join(__dirname, "/papka", "almashdi.txt"),
//   (err) => {
//     if (err) throw err;
//   }
// );
