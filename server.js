const http = require("http");
const fs = require("fs");
const multe = require("./math");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   console.log(req.method);
  //   res.end(`<h1 style="text-align:center"> Malumot topilmadi </h1>`);
  //   if (req.url === "/") {
  //     res.end("malumot yuborildi");
  //   } else if (req.url === "/users") {
  //     res.end("users yuborildi");
  //   } else {
  //     res.end("Malumot Topilmadi");
  //   }
  res.end(`<html>
        <head>
            <title>Malumot yuborish uchun</title>
        </head>
        <body>
            <form action="/message" method="POST">
            <input type="text" name="Message"/>
            <button type="submit">Submit</button>
            </form>
        </body>
</html>`);

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      fs.writeFileSync("message.txt", parsedBody.split("=")[1]);
    });
    res.end();
  }
});

const POST = process.env.POST || 3000;

server.listen(POST, () => {
  console.log("listening on");
});

console.log(multe(2, 5));
