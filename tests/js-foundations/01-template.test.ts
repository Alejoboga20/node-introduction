import { emailTemplate } from '../../src/js-foundations/01-template';

describe('Template Tests', () => {
	test('email template should contain a greeting', () => {
		expect(emailTemplate).toContain('Hi, {{name}}. Welcome to our newsletter');
	});

	test('email template should contain {{name}} and {{orderId}}', () => {
		expect(emailTemplate).toMatch(/{{name}}/);
		expect(emailTemplate).toMatch(/{{orderId}}/);
	});
});
