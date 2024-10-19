//Importing the Packages , Configuration and Tables
const { Sequelize ,DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig');
const productTable = require('./productTable');
const userTable = require('./userTable');

//Establishing the Connection
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
});

//Check the Connection using authenticate method
sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

// Object Creation
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Table Creation
db.productTables = productTable(sequelize, DataTypes);
db.userTables = userTable(sequelize, DataTypes);



//Syncing the Table
sequelize.sync({ force: false }).then(() => {
    console.log(`Database & tables setup`);
})
.catch(err => {
    console.log(`Error while creating the tables`, err);
});


//Exporting the Object
module.exports = db;