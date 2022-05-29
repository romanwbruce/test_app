'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>This is a website, that is deployed on <a href="freeapphosting.net">freeapphosting.net</a> (Totally free!)</h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`line 1`);
console.log(`another line of super awesome text!`);
