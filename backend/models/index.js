const dbConfig = require('../db.config');
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    port:8889
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.template = require('./project.model')(sequelize,DataTypes);

db.sequelize.sync().then(() => console.log('Connected'));

module.exports = db;