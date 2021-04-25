const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended:true
}));


const port = 3000;


//files
app.get("/calculator", function(req, res) {
  res.sendFile(__dirname + "/addition.html");
});


//addition
app.post("/calculator", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  console.log(num1);

  var add = num1 + num2;

  res.send("The Addition of both numbers: " + add);
});


//subtraction
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var subtract = num1 - num2;

  res.send("The subtraction of both numbers: " + subtract);
});


//multiplication
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var multiply = num1 * num2;

  res.send("The multiplication of both numbers: " + multiply);
});


//division
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var divide = num1 / num2;

  res.send("The division of both numbers: " + divide);
});

app.listen(port, function(req, res) {
  console.log("Server running on port 3000");
});
