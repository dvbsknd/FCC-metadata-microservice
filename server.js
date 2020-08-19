'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

// Git/REPL.it syncing webhook
const gitWebhook = require('./webhooks/git.js');
app.use('/git', gitWebhook);

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

const listener = app.listen(process.env.PORT, () => {
  console.log('Server is listening on port ' + listener.address().port);
});
