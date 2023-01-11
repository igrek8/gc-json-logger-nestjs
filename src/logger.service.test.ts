import { Logger, Severity } from 'gc-json-logger';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  it('implements logger interface', () => {
    const log = jest.spyOn(Logger.prototype, 'log');
    const setLabels = jest.spyOn(Logger.prototype, 'setLabels');
    const getLabels = jest.spyOn(Logger.prototype, 'getLabels');
    log.mockImplementation(() => {});
    const logger = new LoggerService();

    logger.log(Severity.DEFAULT, 'test');
    logger.default('test', {});
    logger.debug('test', {});
    logger.info('test', {});
    logger.notice('test', {});
    logger.warning('test', {});
    logger.error('test', {});
    logger.critical('test', {});
    logger.alert('test', {});
    logger.emergency('test', {});
    logger.setLabels({ label: 'text' });
    logger.getLabels();

    expect(log).toHaveBeenCalledWith(Severity.DEFAULT, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.DEBUG, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.INFO, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.NOTICE, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.WARNING, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.ERROR, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.CRITICAL, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.ALERT, 'test', {});
    expect(log).toHaveBeenCalledWith(Severity.EMERGENCY, 'test', {});
    expect(setLabels).toHaveBeenCalledWith({ label: 'text' });
    expect(getLabels).toHaveBeenCalled();
  });
});
