import { Logger, Severity } from 'gc-json-logger';
import { createNestLogger } from './create-nest-logger';

describe('createNestLogger', () => {
  it('creates nest logger', () => {
    const log = jest.spyOn(Logger.prototype, 'log');
    log.mockImplementation(() => {});
    const error = expect.objectContaining({ message: 'error', stack: 'Error: test' });

    const logger = createNestLogger(Logger.getLogger());
    logger.setLogLevels?.(['verbose', 'debug', 'log', 'warn', 'error']);

    logger.verbose?.('verbose');
    logger.debug?.('debug');
    logger.log('log');
    logger.warn?.('warn');
    logger.error('error', 'Error: test');

    expect(log).toHaveBeenCalledWith(Severity.DEFAULT, 'verbose', undefined);
    expect(log).toHaveBeenCalledWith(Severity.DEBUG, 'debug', undefined);
    expect(log).toHaveBeenCalledWith(Severity.INFO, 'log', undefined);
    expect(log).toHaveBeenCalledWith(Severity.WARNING, 'warn', undefined);
    expect(log).toHaveBeenCalledWith(Severity.ERROR, 'error', { error });

    logger.verbose?.('verbose', 'extra');
    logger.debug?.('debug', 'extra');
    logger.log('log', 'extra');
    logger.warn?.('warn', 'extra');
    logger.error('error', 'Error: test', 'extra');

    expect(log).toHaveBeenCalledWith(Severity.DEFAULT, 'verbose', { args: ['extra'] });
    expect(log).toHaveBeenCalledWith(Severity.DEBUG, 'debug', { args: ['extra'] });
    expect(log).toHaveBeenCalledWith(Severity.INFO, 'log', { args: ['extra'] });
    expect(log).toHaveBeenCalledWith(Severity.WARNING, 'warn', { args: ['extra'] });
    expect(log).toHaveBeenCalledWith(Severity.ERROR, 'error', { args: ['extra'], error });
  });
});
