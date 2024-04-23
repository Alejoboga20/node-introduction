import { buildMakePerson } from '../../src/js-foundations/05-factory';

const getUUID = () => '123';
const getAge = (birthdate: string) => 30;

describe('Factory functions tests', () => {
	test('buildMakePerson should return a function ', () => {
		const makePerson = buildMakePerson({ getAge, getUUID });
		expect(makePerson).toBeInstanceOf(Function);
	});

	test('makePerson should return a person object', () => {
		const makePerson = buildMakePerson({ getAge, getUUID });
		const person = makePerson({ name: 'John', birthdate: '1990-01-01' });

		expect(person).toEqual({
			id: '123',
			name: 'John',
			birthdate: '1990-01-01',
			age: 30,
		});
	});
});
