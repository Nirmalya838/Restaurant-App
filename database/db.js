const mysql = require('mysql2');
const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('node-complete', 'root', 'Javascript@321', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL database');
  })
  .catch((err) => {
    console.error('Unable to connect to MySQL database:', err);
  });

module.exports = sequelize;
