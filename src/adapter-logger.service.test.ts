import { Logger, Severity } from 'gc-json-logger';
import { AdapterLoggerService } from './adapter-logger.service';

describe('AdapterLoggerService', () => {
  it('is compatible with nest.js logger interface', () => {
    const log = jest.spyOn(Logger.prototype, 'log');
    log.mockImplementation(() => {});
    const error = expect.objectContaining({ message: 'error', stack: 'stack' });

    const logger = new AdapterLoggerService();
    logger.setLogLevels?.(['verbose', 'debug', 'log', 'warn', 'error']);

    logger.verbose?.('verbose', 'context');
    logger.debug?.('debug', 'context');
    logger.log('log', 'context');
    logger.warn?.('warn', 'context');
    logger.error('error', 'stack', 'context');

    expect(log).toHaveBeenCalledWith(Severity.DEFAULT, 'verbose', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.DEBUG, 'debug', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.INFO, 'log', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.WARNING, 'warn', { context: 'context' });
    expect(log).toHaveBeenCalledWith(Severity.ERROR, 'error', { error, context: 'context' });
  });

  it('supports gc-json-logger signature', () => {
    const log = jest.spyOn(Logger.prototype, 'log');
    log.mockImplementation(() => {});
    const logger = new AdapterLoggerService();
    const error = expect.objectContaining({ message: 'error', stack: 'stack' });
    logger.error('error', { error });
    expect(log).toHaveBeenCalledWith(Severity.ERROR, 'error', { error });
  });

  it('handles unknown cases', () => {
    const log = jest.spyOn(Logger.prototype, 'log');
    log.mockImplementation(() => {});
    const logger = new AdapterLoggerService();
    logger.log({ message: 'test' }, [1], { data: true });
    expect(log).toHaveBeenCalledWith(Severity.INFO, { message: 'test' }, { args: [[1], { data: true }] });
  });
});
