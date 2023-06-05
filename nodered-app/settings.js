"use strict";
require('dotenv-flow').config({});
const path = require('path');
const lodash = require('lodash');

// Node-Red Configuration
// https://nodered.org/docs/user-guide/runtime/configuration

module.exports = {
    flowFile: path.join(__dirname,'flows.json'),
    flowFilePretty: true,
    credentialSecret: process.env.NODERED_CREDENTIAL_SECRET || 'steedos',
    userDir: path.join(__dirname, '.node-red'),
    functionGlobalContext: {
        lodash
    },
    httpStatic: path.join(__dirname, 'public'),
    httpAdminRoot: "/admin"
};
