const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonById = (id, callback) => {
	fetch(`${baseUrl}${id}`)
		.then((response) => {
			if (response.ok) {
				response.json().then((pokemon) => callback(pokemon.name));
			}
		})
		.catch()
		.finally(() => console.log('Pokemon fetched'));
};

const getPokemonByIdWithPromiseConcatenation = (id, callback) => {
	fetch(`${baseUrl}${id}`)
		.then((response) => response.json())
		.then((pokemon) => callback(pokemon.name));
};

const getPokemonByIdWithoutCallback = (id) => {
	return fetch(`${baseUrl}${id}`)
		.then((response) => response.json())
		.then((pokemon) => pokemon.name);
};

const getPokemonByIdWithError = (id) => {
	return fetch(`${baseUrl}${id}`)
		.then((response) => {
			throw new Error('Error fetching data');
		})
		.then((pokemon) => pokemon.name);
};

module.exports = {
	getPokemonById,
	getPokemonByIdWithPromiseConcatenation,
	getPokemonByIdWithoutCallback,
	getPokemonByIdWithError,
};
