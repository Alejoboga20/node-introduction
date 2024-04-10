const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-id.plugin');
const { httpCLient } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
	getAge,
	getUUID,
	httpCLient,
	buildLogger,
};
