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

router.post('/', (req, res) => {
    const projectData = req.body

    Project.addPros(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error adding this new Project' })
    })
})

router.get('/', (req, res) => {

    Project.findPros()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving Projects' })
    })
})

router.post('/tasks', (req, res) => {
    const taskData = req.body

    Project.addTasks(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error adding new Task' })
    })
})

router.get('/tasks', (req, res) => {
    
    Project.findTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving Tasks'})
    })
})

module.exports = router