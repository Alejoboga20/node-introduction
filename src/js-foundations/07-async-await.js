const { httpCLient } = require('../plugins');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonById = async (id) => {
	const response = await httpCLient.get(`${baseUrl}${id}`);
	console.log({ response });
};

getPokemonById(1);

module.exports = {
	getPokemonById,
};
