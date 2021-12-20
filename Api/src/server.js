const express = require('express');
const morgan = require('morgan');
var cors = require('cors')

const server = express();

//middlewares
server.use(morgan('dev'));
server.use(express.json());
server.use(cors())


//routes
server.use('/api/employees',require('./routes/employees.js'));
server.use('/api/users',require('./routes/users.js'));



module.exports = { server };