const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const fs = require('fs');
const path = require('path');
const filePath = './data.json';
const moviesData = require(filePath);

app.prepare().then(() => {

    const server = express();
    server.use(bodyParser.json());

    server.get('/api/v1/movies', (req, res) => {
        return res.json(moviesData)
    });

    server.get('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        const movie = moviesData.find(m => m.id === id);
        return res.json(movie)
    });

    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body;
        moviesData.push(movie);

        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(moviesData, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err)
            }
            return res.json('Movie has been successfully added')
        });
        // return res.json({...movie, createdTime: 'today', author: 'Me'})
    });

    server.patch('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        const movie = req.body;
        const movieIndex = moviesData.findIndex(m => m.id === id);
        // Update the movie
        moviesData[movieIndex] = movie;

        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(moviesData, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err)
            }
            return res.json(movie)
        });
        // return res.json({message: `Updating post of id: ${id}`})
    });

    server.delete('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        const movieIndex = moviesData.findIndex(m => m.id === id);
        // cut the movie
        moviesData.splice(movieIndex, 1);

        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(moviesData, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err)
            }
            return res.json('Movie has been successfully added')
        });
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
