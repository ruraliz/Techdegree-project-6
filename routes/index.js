const express = require('express')
const router= express.Router()
const data = require('../data.json') //set data in json file to data.
const projects= data.projects //set projects object in data to projects. 

router.get('/', (req, res)=>{ //home route, renders to index pug file .
    res.render('index', {projects})
})

router.get('/about', (req, res)=>{// /about route, renders about pug file.
    res.render('about')
})

router.get('/project/:id', (req, res)=>{ // project/:id route that leads to each project based on id.
    const projectId = req.params.id;
    const project = data.projects.find(project => project.id.toString() === projectId);
    res.render('project', {project})
})







module.exports= router 