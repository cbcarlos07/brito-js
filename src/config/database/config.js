
require('dotenv').config()

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    define: {
        timestamps: false
    },
    logging: false,
    pool: {
        max: process.env.DB_CONNECTIONS,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
}