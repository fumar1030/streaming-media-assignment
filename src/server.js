const http = require('http');
const htmlHandler = require('./htmlResponse');
const mediaHandler = require('./mediaResponse');

const port = process.env.port || process.env.NODE_PORT || 3000;

