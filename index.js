var express = require('express');
var app = express();

app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
