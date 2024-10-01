
const express = require('express')
const helmet = require('helmet')
const socketIO = require('socket.io');
const app = express()
const cors = require('cors');
const initRoute = require('../api/routes/init.route')
const fnRouterConfig = require('../api/routes/routes')

const jwt = require('../api/middlewares/jwt.middleware')
//const realtime = require('./config/realtime');
const ErrorsHandler = require('../config/Errors')
const server = require('http').createServer(app); 

// const io = socketIO(server, {
//     cors: {
//       origin: [
//         'http://localhost:4200', 
//         'http://localhost:4201',
//       ],
//       methods: ["GET", "POST", "PATCH"],
//       credentials: true,
//       transports: ['websocket', 'polling'],
//     }
//   });

const corsOptions = {
    origin: [
        'http://localhost:4200',
    ],

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Adicione OPTIONS
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Access-Control-Allow-Methods", "Access-Control-Request-Headers","x-access-token"],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use( 
    helmet(
        {
            crossOriginResourcePolicy: false,
        }
    )
 )
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  next()
})

require('../config/database/init')
app.use(express.static('public'))
const exclusions = [
    '/',
    '/auth',
    '/socket.io',
    '/token',
    '/image',
    '/register',
    '/auth-panel',
    '/refresh-token'
  ]
app.use(jwt({exclusions}))
app.use('/',initRoute )
fnRouterConfig({app})

//realtime(io)


ErrorsHandler(app)


module.exports = server