'use strict';
const express = require('express');
// Constants
const PORT = process.env.PORT;
const MESSAGE = process.env.CLIENT_MESSAGE;

// App
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.get('/my_frontend_endpoint', (req, res) => {
  console.log('client req :>> ', req);
  res.send(`Client Message: ${MESSAGE}\n`);
});

app.listen(PORT);

console.log(`Started client.js with port:${PORT}`);