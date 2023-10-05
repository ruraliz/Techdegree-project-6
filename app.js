const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
app.use(mainRoutes)


app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404;
  res.status(404)
  res.render('page-not-found', { error } );
});

app.use((err, req, res, next) => {
    err.status = err.status || 500
    err.message = err.message || 'Internal Server Error';
    res.status(err.status)
    res.render('error', { error: err })
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

