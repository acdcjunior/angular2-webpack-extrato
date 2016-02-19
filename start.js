var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var static_path = path.join(__dirname, 'dist');
app.use(express.static(static_path));

app.get('/', function (request, response) {
  response.sendFile('index.html', {
    root: static_path
  });
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
