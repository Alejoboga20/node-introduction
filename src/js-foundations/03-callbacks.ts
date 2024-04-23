interface User {
	id: number;
	name: string;
}

const users: User[] = [
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

export function getUserById(id: number, callback: (error?: any, user?: User) => void) {
	const user = users.find((user) => user.id === id);

	if (!user) {
		const error = `User with id ${id} not found`;
		return callback(error);
	}

	return callback(undefined, user);
}
