
let config = require('config');
const mysql2 = require('mysql2');


const Sequelize = require('sequelize');
const sequelize = new Sequelize( config.DB_DATABASE, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Ville = require('../models/villes_france_free')(sequelize, Sequelize);
module.exports = db;
