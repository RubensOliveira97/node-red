const http = require('http');
process.env.PATH = '/usr/bin/git:/usr/lib/git-core:' + process.env.PATH;

const express = require("express");
const RED = require("node-red");

// Create an Express app
const app = express();

// Add a simple route for static content served from 'public'
app.use("/", express.static("public"));

// Import Node-RED settings
const settings = require("./settings.js");

// Initialize Node-REDd
const server = http.createServer(app);
RED.init(server, settings);

// Start Node-RED
RED.start();

// Handle all routes with Node-RED
app.use("/", RED.httpAdmin);

// Port to listen on
const port = process.env.PORT || 3000;
app.set('port', port);

// Start the HTTP server
server.listen(port, function() {
    console.log('HTTP server started on port ' + server.address().port);
});