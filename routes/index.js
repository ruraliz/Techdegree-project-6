const express = require('express') 
const router= express.Router() //creates a new router object
const data = require('../data.json') //set data in json file to data.
const projects= data.projects //set projects object in data to projects. 

router.get('/', (req, res)=>{ //home route, renders to index pug file .
    res.render('index', {projects}) //render index view and pass in projects 
})
 //The req is a giant object which will be received from the user and res is an object which will be sent to the user after the function finishes execution.
router.get('/about', (req, res)=>{// /about route, renders about pug file.
    res.render('about')
})

router.get('/project/:id', (req, res, next)=>{ // project/:id route that leads to each project based on id.
    const projectId = req.params.id; //By using req.params, you can extract specific values from the URL and use them in the  application logic.
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
