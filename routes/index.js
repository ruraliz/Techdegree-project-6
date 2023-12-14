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

router.get('/project/:id', (req, res, next)=>{ // project/:id route that leads to each project based on id.
    const projectId = req.params.id; //By using req.params, you can extract specific values from the URL and use them in your application logic.
    const project = data.projects.find(project => project.id.toString() === projectId);
    if(project) { 
        res.render('project', {project})
    }else{
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
    }
})







module.exports= router 

//Defining all the routes in a single file becomes unwieldy in real-life projects.

//An instance of the Router class is a complete middleware and routing system. Let us define our routes in a separate file and name it routes.js. We will define our routes using the Router class like this: