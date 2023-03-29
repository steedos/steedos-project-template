"use strict";
const path = require('path');
const child_process = require('child_process');


const project = require('./package.json');
const packageName = project.name;

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 * 软件包服务启动后也需要抛出事件。
 */
module.exports = {
	name: packageName,
	namespace: "steedos",
	/**
	 * Settings
	 */
	settings: {
		packageInfo: {
			path: __dirname,
			name: packageName
		}
	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {
        // This function will output the lines from the script 
        // AS is runs, AND will return the full combined output
        // as well as exit code when it's done (using the callback).
        runScript(command, args, callback) {
            this.broker.logger.info(`Starting Process... ${command}`);
            var child = child_process.spawn(command, args);

            var scriptOutput = "";

            child.stdout.setEncoding('utf8');
            child.stdout.on('data', (data) => {
                this.broker.logger.info(data);

                data=data.toString();
                scriptOutput+=data;
            });

            child.stderr.setEncoding('utf8');
            child.stderr.on('data', (data) => {
                this.broker.logger.error(data);

                data=data.toString();
                scriptOutput+=data;
            });

            child.on('close', function(code) {
                console.log('process closed', code);
                // callback(scriptOutput,code);
            });
        },
        startNodeRed() {
            this.runScript('node', ['red']);
        },
        stopNodeRed() {
            // RED.stop();
        }
	},

	/**
	 * Service created lifecycle event handler
	 */
	async created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {
        this.startNodeRed();
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {
        this.stopNodeRed();
	}
};