const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonById = (id, callback) => {
	fetch(`${baseUrl}${id}`)
		.then((response) => {
			if (response.ok) {
				response.json().then((pokemon) => callback(pokemon.name));
			}
		})
		.catch()
		.finally();
};

module.exports = getPokemonById;
