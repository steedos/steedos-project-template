"use strict";
require('dotenv-flow').config({});

const path = require('path');
const RED = require("node-red");
var http = require('http');
var express = require("express");

// Create an Express app
var app = express();

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/",
    httpNodeRoot: false,
    flowFile: 'flows.json',
    userDir: __dirname,
    functionGlobalContext: {
        broker: this.broker
    }    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(1880);

// Start the runtime
RED.start();