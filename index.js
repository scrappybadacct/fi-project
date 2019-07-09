const http = require("http");
const {server} = require("./dist");

server.listen(3001, () => {
  console.log("!!!");
})