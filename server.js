const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname + '/public')));

http.createServer(app).listen(80);

app.get('/', (req, res) => {
    res.sendFile('/index.html');
})

console.log('Server running at http://127.0.0.1:80');