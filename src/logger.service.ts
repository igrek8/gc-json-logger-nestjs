import { Injectable } from '@nestjs/common';
import { ILogger, LogEntryMetadata, Logger, Severity } from 'gc-json-logger';

@Injectable()
export class LoggerService implements ILogger {
  log(severity: Severity, message: string, meta?: LogEntryMetadata): void {
    return Logger.log(severity, message, meta);
  }

  default(message: string, meta?: LogEntryMetadata): void {
    return Logger.default(message, meta);
  }

  debug(message: string, meta?: LogEntryMetadata): void {
    return Logger.debug(message, meta);
  }

  info(message: string, meta?: LogEntryMetadata): void {
    return Logger.info(message, meta);
  }

  notice(message: string, meta?: LogEntryMetadata): void {
    return Logger.notice(message, meta);
  }

  warning(message: string, meta?: LogEntryMetadata): void {
    return Logger.warning(message, meta);
  }

  error(message: string, meta?: LogEntryMetadata): void {
    return Logger.error(message, meta);
  }

  critical(message: string, meta?: LogEntryMetadata): void {
    return Logger.critical(message, meta);
  }

  alert(message: string, meta?: LogEntryMetadata): void {
    return Logger.alert(message, meta);
  }

  emergency(message: string, meta?: LogEntryMetadata): void {
    return Logger.emergency(message, meta);
  }

  setLabels(labels: Record<string, string | undefined>): void {
    return Logger.getLogger().setLabels(labels);
  }

  getLabels(): Record<string, string | undefined> {
    return Logger.getLogger().getLabels();
  }
}
