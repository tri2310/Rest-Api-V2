const http = require('http');
const app =require('./app');


const port = 7000;
const server = http.createServer(app);
server.listen(port);
console.log('Server is running on port 7000');

