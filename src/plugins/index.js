const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-id.plugin');
const { httpCLient } = require('./http-client.plugin');

module.exports = {
	getAge,
	getUUID,
	httpCLient,
};
