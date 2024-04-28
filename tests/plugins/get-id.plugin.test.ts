import { getUUID } from '../../src/plugins';

describe('getId plugin tests', () => {
	test('should return a person id with uuid', () => {
		const uuid = getUUID();

		expect(typeof uuid).toBe('string');
		expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
	});
});
