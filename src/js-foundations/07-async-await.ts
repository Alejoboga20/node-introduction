const { httpCLient } = require('../plugins');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonById = async (id: number | string): Promise<void> => {
	const response = await httpCLient.get(`${baseUrl}${id}`);
	console.log({ response });
};

getPokemonById(1);
