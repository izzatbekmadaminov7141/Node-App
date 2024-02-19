const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   console.log(req.method);
  //   res.end(`<h1 style="text-align:center"> Malumot topilmadi </h1>`);
  if (req.url === "/") {
    res.end("malumot yuborildi");
  } else if (req.url === "/users") {
    res.end("users yuborildi");
  } else {
    res.end("Malumot Topilmadi");
  }
});

const POST = process.env.POST || 3000;

server.listen(POST, () => {
  console.log("listening on");
});
