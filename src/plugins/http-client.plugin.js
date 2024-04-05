const axios = require('axios');

const httpCLient = {
	get: async (url) => {
		const { data } = await axios.get(url);

		return data;
	},
	post: async (url, data) => {},
	put: async (url, data) => {},
	delete: async (url) => {},
};

module.exports = {
	httpCLient,
};
