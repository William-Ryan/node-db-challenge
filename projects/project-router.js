const express = require('express');

const Project = require('./project-model.js')

const router = express.Router()

router.post('/resources', (req, res) => {
    const rescData = req.body

    Project.addRescs(rescData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(() => {
        res.status(500).json({ message: 'Failed to create new Resource' })
    })
})

router.get('/resources', (req, res) => {

    Project.findRescs()
    .then(rescs => {
        res.status(200).json(rescs)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving Resources'})
    })
})

module.exports = router