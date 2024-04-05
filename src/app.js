const { getAge, getUUID } = require('./plugins');
// const { emailTemplate } = require('./js-foundations/01-template');
// require('./js-foundations/02-destructuring');
const { getUserById } = require('./js-foundations/03-callbacks');
const { buildMakePerson } = require('./js-foundations/05-factory');
const getPokemonById = require('./js-foundations/06-promises');

getPokemonById(1, (pokemonName) => console.log({ pokemonName }));

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
