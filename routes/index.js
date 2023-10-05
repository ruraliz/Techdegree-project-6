const express = require('express')
const router= express.Router()
const data = require('../data.json')
const projects= data.projects

router.get('/', (req, res)=>{
    res.render('index', {projects})
})

router.get('/about', (req, res)=>{
    res.render('about')
})

router.get('/project/:id', (req, res)=>{
    const projectId = req.params.id;
    const project = data.projects.find(project => project.id.toString() === projectId);
    res.render('project', {project})
})







module.exports= router