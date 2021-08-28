// require sequelize
const Sequelize = require('sequelize');
// require dotenv??
require('dotenv').config();
// create connection to the db
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}


// export sequelize
module.exports = sequelize;