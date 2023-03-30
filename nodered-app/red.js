"use strict";

const RED = require("node-red");

// Create the settings object - see default settings.js file for other options
var settings = {
	flowFile: 'flows.json',
	userDir: __dirname,
    credentialSecret: process.env.NODERED_CREDENTIAL_SECRET || 'steedos',
	functionGlobalContext: {
	}    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(null, settings);

// Start the runtime
RED.start();