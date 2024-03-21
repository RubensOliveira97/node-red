const express = require("express");
const RED = require("node-red");

// Create an Express app
const app = express();

// Add a simple route for static content served from 'public'
app.use("/", express.static("public"));

// Import Node-RED settings
const settings = require("./settings.js");

// Initialize Node-RED
RED.init(app, settings);

// Start Node-RED
RED.start();

// Handle all routes with Node-RED
app.use("/", RED.httpAdmin);

// Port to listen on
const port = process.env.PORT || 3000;
app.set('port', port);

// Start the Express server
const server = app.listen(port, function() {
    console.log('Express server started on port ' + server.address().port);
});
