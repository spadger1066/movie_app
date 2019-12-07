const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();
    server.use(bodyParser.json());

    server.get('/api/v1/movies', (req, res) => {
        return res.json({message: 'get movies'})
    });

    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body;
        console.log(JSON.stringify(movie));
        return res.json({...movie, createdTime: 'today', author: 'Me'})
    });

    server.patch('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        return res.json({message: `Updating post of id: ${id}`})
    });

    server.delete('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        return res.json({message: `Deleting post of id: ${id}`})
    });

    // we are handling all of the request coming to our server - * catches all endpoints
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
