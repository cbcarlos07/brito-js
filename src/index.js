require('dotenv').config()
const server = require('./server')

const SERVER_PORT = process.env.SERVER_PORT

server.listen(SERVER_PORT, () => {
    console.log(`API is running on [port ${SERVER_PORT}]`);
  });