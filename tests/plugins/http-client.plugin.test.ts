import { httpCLient } from '../../src/plugins';

describe('http client plugin tests', () => {
	test('should perform GET request', async () => {
		const data = await httpCLient.get('https://jsonplaceholder.typicode.com/todos/1');

		expect(data).toEqual({
			userId: expect.any(Number),
			id: expect.any(Number),
			title: expect.any(String),
			completed: expect.any(Boolean),
		});
	});

	test('should have POST, PUT and DELETE methods', async () => {
		expect(httpCLient.post).toBeDefined();
		expect(httpCLient.put).toBeDefined();
		expect(httpCLient.delete).toBeDefined();
	});
});
