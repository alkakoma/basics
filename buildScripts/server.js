var express = require('express');
var path = require('path');
var port = "8000";
var atStart = require('./startMessage');

var app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Server listening on port : " + port);
    }
})