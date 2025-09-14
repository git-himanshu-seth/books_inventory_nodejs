const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.end("Welcome to books inventory.");
});

server.listen("3300", (e) => {
  if (e) console.log(e);
  else {
    console.log("server run on port: 3300");
  }
});
