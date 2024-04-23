import { characters } from '../../src/js-foundations/02-destructuring';

describe('Destructuring Tests', () => {
	test('should contain batman', () => {
		expect(characters).toContain('Batman');
	});

	test('should contain superman as second element', () => {
		const [_, superman] = characters;
		expect(superman).toBe('Superman');
	});
});
