import { getPokemonById } from '../../src/js-foundations/07-async-await';

const POKE_ID = 1;
const POKE_ID_NOT_FOUND = 999999999;

describe('Async Await Tests', () => {
	test('should return a pokemon', async () => {
		const pokemonName = await getPokemonById(POKE_ID);
		expect(pokemonName).toBe('bulbasaur');
	});

	test('should return an error if pokemon not found', async () => {
		try {
			await getPokemonById(POKE_ID_NOT_FOUND);
		} catch (error) {
			expect(error).toBeTruthy();
		}
	});
});
