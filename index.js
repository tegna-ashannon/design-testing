var express = require('express');
var app = express();

app.use('/01',express.static(__dirname + '/01'));
app.use('/01-weather',express.static(__dirname + '/01-weather'));
app.use('/02',express.static(__dirname + '/02'));
app.use('/03',express.static(__dirname + '/03'));

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
