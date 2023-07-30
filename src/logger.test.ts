import { Logger as ContextLogger, Severity } from 'gc-json-logger';
import { Logger } from './logger';

jest.mock('gc-json-logger');

describe('Logger', () => {
  it.each(['default', 'debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency'] as const)(
    'calls %s',
    (severity) => {
      const context = 'UsersController';
      const realm = 'users';
      const user = 'john';
      const logger = new Logger(context, { realm });
      logger[severity]('sign in', { labels: { user } });
      expect(ContextLogger[severity]).toHaveBeenCalledWith('sign in', { context, labels: { realm, user } });
    }
  );

  it('calls log', () => {
    const context = 'UsersController';
    const realm = 'users';
    const user = 'john';
    const logger = new Logger(context, { realm });
    logger.log(Severity.DEFAULT, 'message', { labels: { user } });
    expect(ContextLogger.log).toHaveBeenCalledWith(Severity.DEFAULT, 'message', { context, labels: { realm, user } });
  });

  it('calls setLabels and getLabels', () => {
    const logger = new Logger();
    logger.setLabels({ user: 'john' });
    expect(logger.getLabels()).toEqual({ user: 'john' });
  });

  it('calls getName', () => {
    const logger = new Logger();
    logger.getName();
    expect(ContextLogger.getName).toHaveBeenCalled();
  });
});
