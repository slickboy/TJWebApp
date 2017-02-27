var express = require('express')
var app = express()
var nodemon = require('nodemon')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("served")
  console.log("served2")
  console.log("served3")
  console.log("served4")
})
app.get('/summer.html', function(req,res) {
  res.sendFile(__dirname + "/summer.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})