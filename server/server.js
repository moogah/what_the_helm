'use strict';
const express = require('express');
// Constants
const PORT = 8080; // todo: use env var

// App
const app = express();
// kubernetes readiness and liveness checks
app.get('/', (req, res) => {
  console.log('server req :>> ', req);
  res.status(200).send('Server is OK')
});

app.listen(PORT);

console.log(`Started server.js with port:${PORT}`);