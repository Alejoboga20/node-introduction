import { getUserById } from '../../src/js-foundations/03-callbacks';

const USER_ID = 1;
const USER_ID_NOT_FOUND = 10;

const userBench = {
	id: 1,
	name: 'John',
};

describe('Callback Tests', () => {
	test('should return user', () => {
		getUserById(USER_ID, (error, user) => {
			expect(error).toBeUndefined();
			expect(user).toEqual(userBench);
		});
	});

	test('should throw user not found', () => {
		getUserById(USER_ID_NOT_FOUND, (error, user) => {
			expect(error).toBe(`User with id ${USER_ID_NOT_FOUND} not found`);
			expect(user).toBeUndefined();
		});
	});
});
