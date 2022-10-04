import { Injectable, Scope } from '@nestjs/common';
import { LogEntryMetadata, Logger, Severity } from 'gc-json-logger';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService implements Omit<Logger, 'name'> {
  protected logger: Logger;

  constructor() {
    this.logger = Logger.getLogger();
  }

  log(severity: Severity, message: string, meta?: LogEntryMetadata): void {
    return this.logger.log(severity, message, meta);
  }

  default(message: string, meta?: LogEntryMetadata): void {
    return this.logger.default(message, meta);
  }

  debug(message: string, meta?: LogEntryMetadata): void {
    return this.logger.debug(message, meta);
  }

  info(message: string, meta?: LogEntryMetadata): void {
    return this.logger.info(message, meta);
  }

  notice(message: string, meta?: LogEntryMetadata): void {
    return this.logger.notice(message, meta);
  }

  warning(message: string, meta?: LogEntryMetadata): void {
    return this.logger.warning(message, meta);
  }

  error(message: string, meta?: LogEntryMetadata): void {
    return this.logger.error(message, meta);
  }

  critical(message: string, meta?: LogEntryMetadata): void {
    return this.logger.critical(message, meta);
  }

  alert(message: string, meta?: LogEntryMetadata): void {
    return this.logger.alert(message, meta);
  }

  emergency(message: string, meta?: LogEntryMetadata): void {
    return this.logger.emergency(message, meta);
  }
}
