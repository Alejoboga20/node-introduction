import { httpCLient } from '../plugins';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonById = async (id: number | string): Promise<string> => {
	try {
		const response = await httpCLient.get(`${baseUrl}${id}`);
		return response.name;
	} catch (error) {
		throw new Error('Pokemon not found');
	}
};

getPokemonById(1);
