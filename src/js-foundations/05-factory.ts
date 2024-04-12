interface BuildMakePersonOptions {
	getUUID: () => string;
	getAge: (birthdate: string) => number;
}

interface PersonOptions {
	name: string;
	birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
	return ({ name, birthdate }: PersonOptions) => {
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
