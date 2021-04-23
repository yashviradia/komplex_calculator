const express = require("express");

const app = express();

const port = 3000;

app.get("/", function(req, res) {
  res.send("<h1>Hallo, Welt!<h1>");
});

app.listen(port, function(req, res) {
  console.log("Server running on port 3000");
});
