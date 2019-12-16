/*
const express = require("express");
const app = express();
const router = express.Router();

//allow custom header and CORS
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});
app.use(express.static("out"));
const notesModel = require('./model/notesModel.js');

notesModel(app, router);
app.listen(4000, () => console.log("Example app listening on port 4000!"));
*/

const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const notesModel = require("./model/notesModel.js");

app.prepare()
    .then(() => {
        const server = express()
        //allow custom header and CORS
        server.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
            res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

            if (req.method == 'OPTIONS') {
                res.send(200); /让options请求快速返回/
            }
            else {
                next();
            }
        });
        server.use(express.static("out"));
        notesModel(server);

        // custom route for posts
        server.get('/post/:id', (req, res) => {
            return app.render(req, res, '/post', {
                id: req.params.id
            })
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })