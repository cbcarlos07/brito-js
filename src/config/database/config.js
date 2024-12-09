
require('dotenv').config()
const {DB_USER, DB_PROTOCOL, DB_PORT, DB_SERVICE, DB_PWD, DB_HOST } = process.env
module.exports = {
    dialect: 'oracle',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PWD,
    dialectOptions: {
        connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=${DB_PROTOCOL})(HOST=${DB_HOST})(PORT=${DB_PORT}))(CONNECT_DATA=(SERVICE_NAME=${DB_SERVICE})))`
    }
}