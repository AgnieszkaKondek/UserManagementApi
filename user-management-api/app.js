var express = require('express');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./config/swagger.json'); 

const addUserRoutes = require("./routes/user");
const editUserRoutes = require("./routes/edit-user");
const removeUserRoutes = require("./routes/remove-user");
const getUserRoutes = require("./routes/users");
const authRoutes = require('./routes/auth'); 

var app = express();

app.use(express.json()); 

app.use('/api/user', addUserRoutes);  
app.use('/api/user', editUserRoutes); 
app.use('/api/user', removeUserRoutes); 
app.use('/api/users', getUserRoutes);
app.use('/',authRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (req, res, next) {
  res.status(404).json({ error: 'Not Found' });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = app;
