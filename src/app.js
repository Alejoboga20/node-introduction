// const { emailTemplate } = require('./js-foundations/01-template');
// require('./js-foundations/02-destructuring');
const { getUserById } = require('./js-foundations/03-callbacks');
require('./js-foundations/05-factory');

getUserById(1, (error, user) => {
	if (error) {
		throw new Error(error);
	}
	console.log(user);
});
