//Make sure to do a 'npm install express' in the terminal to let the server properly use express.js. If not, it throws an error about express being undefined.
const express = require('express')
const server = express()
const port = 3000;

const indexPath = require('path')

//Establishes a connection with the 'frontend' folder to let the server use the files within it.
server.use(express.static(__dirname + '/frontend'))
server.use(express.json());

//Pulls data from the 'frontend' folder.
server.get('/', (req, res) => {
    res.sendFile(indexPath.resolve('../frontend/index.html'))
});

//Logs information onto the terminal. Paste the 'http://localhost:3000' which it outputs into your browser. 
server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});




