const express = require('express');
const app = express();
const port = 3000;
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({server: server});

wss.on('connection', function connection(ws){
    console.log('A new client connected');
    ws.send("Welcome");

    ws.on('message', function incoming(message){
        console.log('received: %s', message);
        ws.send('Your message is: ' + message);
    })
})

app.get('/', (req, res) => res.send('Hello World'));

server.listen(port, ()=>console.log(`Listening on port ${port}!`));