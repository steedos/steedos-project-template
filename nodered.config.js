"use strict";
require('dotenv-flow').config({});
const lodash = require('lodash');

// Node-Red Configuration
// https://nodered.org/docs/user-guide/runtime/configuration
module.exports = {
    httpAdminRoot:"/",
    httpNodeRoot: "/",
    flowFile: 'flows.json',
    userDir: __dirname,
    credentialSecret: process.env.NODERED_CREDENTIAL_SECRET || 'steedos',
    functionGlobalContext: {
        lodash
    }    // enables global context
};
