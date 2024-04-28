import { buildLogger, logger as winstonLogger } from '../../src/plugins';

describe('logger plugin tests', () => {
	test('should return a function logger', () => {
		const logger = buildLogger('test');

		expect(typeof logger.log).toBe('function');
		expect(typeof logger.error).toBe('function');
	});

	test('should call logger.log', () => {
		const winstonLogSpy = jest.spyOn(winstonLogger, 'log');

		const message = 'test message';
		const service = 'test service';
		const logger = buildLogger(service);

		logger.log(message);
		expect(winstonLogSpy).toHaveBeenCalledWith(
			'info',
			expect.objectContaining({ message, service })
		);
	});
});
