const sequelize = require('./config/database'); // Ścieżka do pliku konfiguracji Sequelize
const User = require('./models/user'); // Ścieżka do modelu

const syncDatabase = async () => {
  try {
    await sequelize.authenticate(); // Sprawdź, czy połączenie z bazą działa
    console.log('Połączono z bazą danych.');

    // Synchronizacja bazy danych (utworzenie tabeli, jeśli jeszcze nie istnieje)
    await sequelize.sync({ alter: true }); // Użyj `force: true` dla wymuszenia nadpisania tabel
    console.log('Baza danych została zsynchronizowana.');
  } catch (err) {
    console.error('Błąd podczas synchronizacji bazy danych:', err.message);
  } finally {
    await sequelize.close(); // Zamknij połączenie
  }
};

syncDatabase();
