const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  const city = req.body.cityName;
  const apiKey = "9eb86b0402792cce91b1e65bc65dc4dd";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units="+unit;

  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      //console.log(weatherData)
      const temp = weatherData.main.temp// TEMP:
      const desc = weatherData.weather[0].description
      res.write("<p>The weather is currently "+desc+"</p>")
      res.write("<h1>The Weather in "+city+" "+temp+" degree celcius</h1>")
      res.write("<img style='height:60px;' alt='icon' src='http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png'>")
      res.send()
    });
  });
})

app.listen(3000, ()=>{
  console.log("app is listening to port 3000");
});
