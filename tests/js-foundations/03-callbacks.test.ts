import { getUserById } from '../../src/js-foundations/03-callbacks';

const USER_ID = 10;

describe('Callback Tests', () => {
	test('should throw user not found', () => {
		getUserById(USER_ID, (error, user) => {
			console.log({ user, error });
			expect(error).toBe(`User with id ${USER_ID} not found`);
			expect(user).toBeUndefined();
		});
	});
});
