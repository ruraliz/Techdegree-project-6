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
    res.render('project')
})







module.exports= router