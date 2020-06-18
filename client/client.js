'use strict';
const express = require('express');
const http = require('http');
// Constants
const PORT = process.env.PORT;
const MESSAGE = process.env.CLIENT_MESSAGE;
const BACKEND_SERVICE = process.env.BACKEND_SERVICE;
const BACKEND_PORT = process.env.BACKEND_PORT;


function asyncHTTPRequest() {
	return new Promise((resolve, reject) => {
		http.get(`http://${BACKEND_SERVICE}:${BACKEND_PORT}/my_endpoint`, (response) => {
			let data = [];

			response.on('data', (fragments) => {
				data.push(fragments);
			});

			response.on('end', () => {
				let response_body = Buffer.concat(data);
				resolve(response_body.toString());
			});

			response.on('error', (error) => {
				reject(error);
			});
		});
	});
}

// App
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.get('/my_frontend_endpoint', async (req, res) => {
	console.log('client req :>> ', req);
	let backend_response = 'none';

	try {
		let request = asyncHTTPRequest();
		backend_response = await request;
	}
	catch(error) {
		console.log(error);
	}

  res.send(`Client Message: ${MESSAGE}\nBackend Response: ${backend_response}\nBackend Service Address: ${BACKEND_SERVICE}\nBackend Port: ${BACKEND_PORT}\n`);
});

app.listen(PORT);

console.log(`Started client.js with port:${PORT}`);