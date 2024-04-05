const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonById = async (id) => {
	const response = await fetch(`${baseUrl}${id}`);
	const pokemon = await response.json();

	return pokemon.name;
};

module.exports = {
	getPokemonById,
};
