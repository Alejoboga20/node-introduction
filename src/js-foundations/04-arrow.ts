interface User {
	id: number;
	name: string;
}

const users = [
	{
		id: 1,
		name: 'John',
	},
	{
		id: 2,
		name: 'Jane',
	},
	{
		id: 3,
		name: 'Alice',
	},
];

export const getUserById = (id: number, callback: (error?: any, user?: User) => void) => {
	const user = users.find((user) => user.id === id);

	if (!user) {
		callback(`User with id ${id} not found`);
	}

	return callback(undefined, user);
};
