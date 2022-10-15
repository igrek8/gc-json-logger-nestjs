import { Injectable } from '@nestjs/common';
import { ILogger, LogEntryMetadata, Logger, Severity } from 'gc-json-logger';

@Injectable()
export class LoggerService implements ILogger {
  log(severity: Severity, message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().log(severity, message, meta);
  }

  default(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().default(message, meta);
  }

  debug(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().debug(message, meta);
  }

  info(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().info(message, meta);
  }

  notice(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().notice(message, meta);
  }

  warning(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().warning(message, meta);
  }

  error(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().error(message, meta);
  }

  critical(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().critical(message, meta);
  }

  alert(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().alert(message, meta);
  }

  emergency(message: string, meta?: LogEntryMetadata): void {
    return Logger.getLogger().emergency(message, meta);
  }
}
