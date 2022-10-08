import { LoggerService, LogLevel } from '@nestjs/common';
import { Logger } from 'gc-json-logger';

export function createNestLogger(logger: Logger): LoggerService {
  let logLevels = new Set<LogLevel>(['log', 'warn', 'error']);
  return {
    error(message: string, stack: string, context: string) {
      if (logLevels.has('error')) {
        const error = new Error(message);
        error.stack = stack;
        logger.error(message, { error, context });
      }
    },
    log(message, context) {
      if (logLevels.has('log')) {
        logger.info(message, { context });
      }
    },
    warn(message: string, context: string) {
      if (logLevels.has('warn')) {
        logger.warning(message, { context });
      }
    },
    debug(message: string, context: string) {
      if (logLevels.has('debug')) {
        logger.debug(message, { context });
      }
    },
    verbose(message: string, context: string) {
      if (logLevels.has('verbose')) {
        logger.default(message, { context });
      }
    },
    setLogLevels(levels) {
      logLevels = new Set<LogLevel>(levels);
    },
  };
}
