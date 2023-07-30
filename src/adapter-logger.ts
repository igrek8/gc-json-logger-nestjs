/* eslint-disable @typescript-eslint/no-explicit-any */

import { LoggerService, LogLevel } from '@nestjs/common';
import { LogEntryMetadata, Logger } from 'gc-json-logger';

/**
 * Nest.js compatible logger
 */
export class AdapterLogger implements LoggerService {
  protected logLevels = new Set<LogLevel>(['log', 'warn', 'error']);

  protected write(channel: 'default' | 'debug' | 'info' | 'warning' | 'error', message: any, ...optionalParams: any[]) {
    let meta: LogEntryMetadata = {};

    const context = optionalParams[optionalParams.length - 1];

    if (typeof context === 'string') {
      meta['context'] = optionalParams.pop();
    }

    if (typeof message === 'string' && optionalParams.length <= 1 && typeof optionalParams[0] === 'object') {
      // handle gc-json-logger log (message: string, meta: LogEntryMetadata) => void
      meta = optionalParams[0];
    } else if (typeof message === 'string' && channel === 'error') {
      // handle nest.js application log (message: string, stack?: string, context?: string) => void
      const error = new Error(message);
      error.stack = optionalParams[0];
      meta['error'] = error;
    } else if (optionalParams.length > 0) {
      // handle other cases
      meta['args'] = optionalParams;
    }

    const logger = Logger.getLogger();
    logger[channel](message, meta);
  }

  error(message: any, ...optionalParams: any[]) {
    if (this.logLevels.has('error')) {
      this.write('error', message, ...optionalParams);
    }
  }

  log(message: any, ...optionalParams: any[]): void {
    if (this.logLevels.has('log')) {
      this.write('info', message, ...optionalParams);
    }
  }

  warn(message: any, ...optionalParams: any[]): void {
    if (this.logLevels.has('warn')) {
      this.write('warning', message, ...optionalParams);
    }
  }

  debug(message: any, ...optionalParams: any[]): void {
    if (this.logLevels.has('debug')) {
      this.write('debug', message, ...optionalParams);
    }
  }

  verbose(message: any, ...optionalParams: any[]) {
    if (this.logLevels.has('verbose')) {
      this.write('default', message, ...optionalParams);
    }
  }

  setLogLevels(levels: LogLevel[]) {
    this.logLevels = new Set<LogLevel>(levels);
  }
}
