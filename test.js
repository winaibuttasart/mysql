var express = require('express');

var app = express();



app.get('/', function (req, res) {
   res.send('hello world')s
});




app.listen(8080)
console.log('node app running on port 8080')






