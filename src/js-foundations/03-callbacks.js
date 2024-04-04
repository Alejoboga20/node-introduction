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

function getUserById(id, callback) {
	const user = users.find((user) => user.id === id);

	if (!user) {
		callback(`User with id ${id} not found`, null);
	}

	return callback(null, user);
}

module.exports = {
	getUserById,
};
