const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();
    // we are handling all of the request coming to our server
    server.get('*', (req, res) => {
        // next.js is handling requests and providing the pages we are navigating to
        // return res.json({message: 'Welcome to the server'});
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;

    // This also handled all of the request coming to our server
    // server.use(handle).listen(PORT, (err) => {
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on port ' + PORT);
    });
});
