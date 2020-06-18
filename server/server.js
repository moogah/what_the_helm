'use strict';
const express = require('express');
// Constants
const PORT = 8080; // todo: use env var

// App
const app = express();
// kubernetes readiness and liveness checks
app.get('/', (req, res) => {
  res.status(200).send('OK')
});

// we need a seperate endpoint for actual traffic, otherwise the liveness/readiness check will mess with us
app.get('/my_endpoint', (req, res) => {
  console.log('server req :>> ', req);
  res.status(200).send('Hello this is server')
});

app.listen(PORT);

console.log(`Started server.js with port:${PORT}`);