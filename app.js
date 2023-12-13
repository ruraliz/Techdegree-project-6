const express = require('express'); //require express depedency 
const app = express();

//serve static files 
app.use('/static', express.static('public'));

//setting view engine to pug 
app.set('view engine', 'pug');

//routes 
const mainRoutes = require('./routes');
app.use(mainRoutes)

//error Handler for 404 and other errors 
// app.use((req, res, next) => {
//   const error = new Error('Not Found')
//   error.status = 404;
//   res.status(404)
//   res.render('page-not-found', { error } );
// });

// app.use((err, req, res, next) => {
//     err.status = err.status || 500
//     err.message = err.message || 'Internal Server Error';
//     res.status(err.status)
//     res.render('error', { error: err })
// });

app.use((req, res, next) => {
  res.status(404).render("page-not-found");
});

/* Global error handler */
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.render("page-not-found", { err });
  } else {
    err.status = 500;
    err.message = "Sorry! It looks like something went wrong on the server.";
    res.render("error", { err });
  }
  console.log(err.message);
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});




