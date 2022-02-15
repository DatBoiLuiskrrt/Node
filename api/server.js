const express = require("express");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
  res.status(404).json({
    message: "ayy bro there is nothing here",
  });
});

module.exports = server;
