import axios from 'axios';

export const httpCLient = {
	get: async (url: string) => {
		const { data } = await axios.get(url);

		return data;
	},
	post: async (url: string, body: any) => {
		throw new Error('Method Not implemented');
	},
	put: async (url: string, body: any) => {
		throw new Error('Method Not implemented');
	},
	delete: async (url: string) => {
		throw new Error('Method Not implemented');
	},
};
