var express = require('express');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./config/swagger.json'); 


const sequelize = require('./config/database');

sequelize
  .authenticate()
  .then(() => console.log('Połączono z bazą danych!'))
  .catch(err => console.error('Błąd połączenia z bazą danych:', err));

  
var app = express();
  
// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

// Swagger UI (dokumentacja dostępna pod /api-docs)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Główna trasa API (na przykładzie użytkowników)
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Obsługa 404 (jeśli żądanie nie pasuje do żadnej ścieżki)
app.use(function (req, res, next) {
  res.status(404).json({ error: 'Not Found' });
});

// Obsługa błędów
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = app;
