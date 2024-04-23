import { getAge } from '../../src/plugins';

const birthdate = '1990-01-01';

describe('get age plugin tests', () => {
	test('should return a person age', () => {
		const age = getAge(birthdate);

		expect(typeof age).toBe('number');
	});

	test('should return current age', () => {
		const age = getAge(birthdate);

		const currentYear = new Date().getFullYear();
		const birthYear = new Date(birthdate).getFullYear();
		const expectedAge = currentYear - birthYear;

		expect(age).toBe(expectedAge - 1);
	});
});
