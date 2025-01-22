var express = require('express');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./config/swagger'); 

const authRoutes = require('./routes/auth'); 

app.use('/', authRoutes);

var app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function ( res) {
  res.status(404).json({ error: 'Not Found' });
});

app.use(function (err, res) {
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = app;
