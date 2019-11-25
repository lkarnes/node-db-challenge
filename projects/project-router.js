const express = require('express');

const db = require('./projects-model.js');

const router = express.Router();

router.post('/projects' , (req,res) => {
    db.addPro(req.body).then(project => {
        res.status(201).json(project)
    })
})

router.get('/projects', (req, res) => {
    db.getPro().then(projects => {
        res.status(200).json(projects)
    })
})

router.post('/resources' , (req,res) => {
    db.addRes(req.body).then(response => {
        res.status(201).json(response)
    })
})

router.get('/resources', (req, res) => {
    db.getRes().then(resources => {
        res.status(200).json(resources);
    })
})

router.post('/tasks', (req,res) => {
    db.addTask(req.body).then(task => {
        res.status(201).json(task)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/tasks', (req,res)=> {
    db.getTask().then(tasks => {
        res.status(200).json(tasks)
    })
})


module.exports = router;