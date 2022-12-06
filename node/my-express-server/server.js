const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("<h1>hello world!! this is Ankush</h1>");

});

app.get("/contact", function(req, res){
  res.send("<h1>Name: Rashm</h1><h1>address: London</h1>");

});

app.get("/about", function(req, res){
  res.send("<p>Many built-in operations that expect objects first coerce their arguments to objects. The operation can be summarized as follows:</p>");

});


app.listen(3000, function(){
  console.log("server started at port 3000");

});
