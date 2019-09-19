"use strict";

const net = require('net');

const socket = net.createConnection(3000, '96.126.116.118', ()=> {
    console.log('Connected to RetroMUD');
});

let line = '';
socket.on('connect', () => {
    process.stdin.pipe(socket); // writes to Retro server
})

socket.on('data', chunk => { // reads data in to STDOUT
    let str = chunk.toString();

    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str[i];
        line += chr;

        process.stdout.write(chr);

        if (/[\n\r]$/.test(chr)) {
            process.stdout.write(line);
            line = '';
        }
    }
});

socket.on('end', () => {
    console.log('Connection closed from RetroMUD');
    socket.end();
})
module.exports = socket;