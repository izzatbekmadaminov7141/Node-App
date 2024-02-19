const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
});

const POST = process.env.POST || 3000;

server.listen(POST, () => {
  console.log("listening on");
});
