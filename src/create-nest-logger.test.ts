import { Logger, Severity } from 'gc-json-logger';
import { createNestLogger } from './create-nest-logger';

describe('createNestLogger', () => {
  it('creates nest logger', () => {
    const log = jest.spyOn(Logger.prototype, 'log');
    log.mockImplementation(() => {});
    const error = expect.objectContaining({ message: 'error', stack: 'Error: test' });

    const logger = createNestLogger(Logger.getLogger());
    logger.setLogLevels?.(['verbose', 'debug', 'log', 'warn', 'error']);

    logger.verbose?.('verbose', 'context');
    logger.debug?.('debug', 'context');
    logger.log('log', 'context');
    logger.warn?.('warn', 'context');
    logger.error('error', 'Error: test', 'context');

    expect(log).toHaveBeenCalledWith(Severity.DEFAULT, 'verbose', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.DEBUG, 'debug', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.INFO, 'log', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.WARNING, 'warn', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.ERROR, 'error', { error, context: 'context' });
  });
});
