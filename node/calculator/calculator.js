const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res){
  console.log(req.body);
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var sum = n1+n2;
  //console.log(res);
  res.send("Sum of the number is = "+sum);
});

app.get("/bmi", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmiValue = Math.floor(weight/(height*height));
  res.send("Bmi valu is = "+bmiValue)

});

app.listen(3000, function(){
  console.log("server start listening to port 3000 .... ")
});
