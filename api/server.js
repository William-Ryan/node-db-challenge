const express = require('express');
const helmet = require('helmet');
const cors = require('cors')


// const db = require('../data/knex-config.js')

const server = express();

server.use(express.json())
server.use(helmet());
server.use(cors());

// server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
    res.send(`<h1>It's working!</h1>`)
})

module.exports = server