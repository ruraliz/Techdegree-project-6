const express = require('express'); //require express depedency 

const app = express();
// create our app variable calling express()


//serve static files 
app.use('/static', express.static('public'));

//setting view engine to pug 
app.set('view engine', 'pug');
//The views property defines the directory where the template files are located.

//routes 
const mainRoutes = require('./routes');
app.use(mainRoutes)
//import the routes defined in the file: routes. 

//error Handler for 404 and other errors 
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404; 
  next(err); //
});
app.use((err, req, res, next) => {
  if(err.status === 404){
      res.status(404);
      err.status = 404;
      err.message = " This page was not found";
      res.render('page-not-found', {err});
  } else {
      err.status =  err.status || 500;
      console.log(err.status);
      err.message = err.message || 'Internal Server Error';
      res.render('error', {err});
  }
})


app.listen(3000, () => { //We are passing 3000 into the listen function, which tells the app which port to listen on.
    console.log('The application is running on localhost:3000!')
});






