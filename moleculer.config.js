module.exports = {
	// Namespace of nodes to segment your nodes on the same network.
	namespace: "steedos",
	// Default log level for built-in console logger. It can be overwritten in logger options above.
	// Available values: trace, debug, info, warn, error, fatal
	logLevel: "warn",

    transporter: process.env.STEEDOS_TRANSPORTER,

	cacher: process.env.STEEDOS_CACHER,

	// Called after broker started.
	started(broker) {
	},

};
