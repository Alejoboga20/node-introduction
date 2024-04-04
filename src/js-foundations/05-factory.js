//const { getAge, getUUID } = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {
	return ({ name, birthdate }) => {
		return {
			id: getUUID(),
			name,
			birthdate,
			age: getAge(birthdate),
		};
	};
};

// const buildPerson = ({ name, birthdate }) => {
// 	return {
// 		id: getUUID(),
// 		name,
// 		birthdate,
// 		age: getAge(birthdate),
// 	};
// };
// const obj = { name: 'John', birthdate: '1994-08-26' };
// const john = buildPerson(obj);
// console.log({ john });

module.exports = {
	buildMakePerson,
};
