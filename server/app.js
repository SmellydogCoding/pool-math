const express = require('express');
const app = express();
const morgan = require('morgan');

app.use('/', require('./routes.js'));

app.set('port', process.env.PORT || 8081);
app.use(morgan('dev'));
app.set('view engine','pug');
app.set('views', __dirname);

app.use((req, res, next) => {
  res.status(404).redirect('/');
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error);
});

const server = app.listen(app.get('port'), function() {
  console.log('Express server is listening on port ' + server.address().port);  
});