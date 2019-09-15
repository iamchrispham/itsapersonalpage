"use strict";

const net = require('net');

const socket = net.createConnection(3000, '96.126.116.118', ()=> {
    process.stdin.pipe(socket);
});

let line = '';

socket.on('data', chunk => {
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