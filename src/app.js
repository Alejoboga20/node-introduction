const { getAge, getUUID } = require('./plugins');
// const { emailTemplate } = require('./js-foundations/01-template');
// require('./js-foundations/02-destructuring');
const { getUserById } = require('./js-foundations/03-callbacks');
const { buildMakePerson } = require('./js-foundations/05-factory');
const {
	getPokemonById,
	getPokemonByIdWithPromiseConcatenation,
	getPokemonByIdWithoutCallback,
	getPokemonByIdWithError,
} = require('./js-foundations/06-promises');
require('./js-foundations/07-async-await');
const { buildLogger } = require('./plugins');

getPokemonById(1, (pokemonName) => console.log({ pokemonName }));
getPokemonByIdWithPromiseConcatenation(2, (pokemonName) => console.log({ pokemonName }));
getPokemonByIdWithoutCallback(3).then((pokemonName) => console.log({ pokemonName }));
getPokemonByIdWithError(4)
	.then((pokemonName) => console.log({ pokemonName }))
	.catch((error) => console.log({ error }));

getUserById(1, (error, user) => {
	if (error) {
		throw new Error(error);
	}
	console.log(user);
});

const makePerson = buildMakePerson({ getAge, getUUID });
const obj = { name: 'John', birthdate: '1994-08-26' };
const john = makePerson(obj);
console.log({ john });

const logger = buildLogger('app.js');
logger.log('Hello, world!');
logger.error('An error occurred!');
