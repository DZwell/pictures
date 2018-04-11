const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.use(express.static('src'));

app.get('/', function(req, res) {  
    res.sendFile('index.html');
});

app.listen(port, console.log(`Listening on port ${port}`));