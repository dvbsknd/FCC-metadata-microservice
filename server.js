'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

// Git/REPL.it syncing webhook
const gitWebhook = require('./webhooks/git.js');
app.use('/git', gitWebhook);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', (req, res) => {
  console.log(req.body);
  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', () => {
    const data = Buffer.concat(chunks);
    console.log(data);
    res.send(data)
  });
});

const listener = app.listen(process.env.PORT, () => {
  console.log('Server is listening on port ' + listener.address().port);
});
