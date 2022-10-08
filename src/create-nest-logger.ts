import { LoggerService, LogLevel } from '@nestjs/common';
import { Logger } from 'gc-json-logger';

export function createNestLogger(logger: Logger): LoggerService {
  let logLevels: LogLevel[] = ['verbose', 'debug', 'log', 'warn', 'error'];
  return {
    error(message: string, stack?: string, ...args) {
      if (logLevels.includes('error')) {
        const error = new Error(message);
        if (stack) error.stack = stack;
        logger.error(message, { error, args: args.length > 0 ? args : undefined });
      }
    },
    log(message, ...args) {
      if (logLevels.includes('log')) {
        logger.info(message, args.length > 0 ? { args } : undefined);
      }
    },
    warn(message, ...args) {
      if (logLevels.includes('warn')) {
        logger.warning(message, args.length > 0 ? { args } : undefined);
      }
    },
    debug(message, ...args) {
      if (logLevels.includes('debug')) {
        logger.debug(message, args.length > 0 ? { args } : undefined);
      }
    },
    verbose(message, ...args) {
      if (logLevels.includes('verbose')) {
        logger.default(message, args.length > 0 ? { args } : undefined);
      }
    },
    setLogLevels(levels) {
      logLevels = levels;
    },
  };
}
