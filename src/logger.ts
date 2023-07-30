import { Logger as ContextLogger, ILogger, LogEntryMetadata, Severity } from 'gc-json-logger';

export class Logger implements ILogger {
  constructor(protected context?: string, protected labels: Record<string, string | undefined> = {}) {}

  log(severity: Severity, message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.log(severity, message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  default(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.default(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  debug(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.debug(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  info(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.info(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  notice(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.notice(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  warning(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.warning(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  error(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.error(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  critical(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.critical(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  alert(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.alert(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  emergency(message: string, meta?: LogEntryMetadata | undefined): void {
    ContextLogger.emergency(message, {
      ...meta,
      context: this.context,
      labels: { ...meta?.labels, ...this.labels },
    });
  }

  setLabels(labels: Record<string, string | undefined>): void {
    this.labels = labels;
  }

  getLabels(): Record<string, string | undefined> {
    return this.labels;
  }

  getName(): string {
    return this.context ?? ContextLogger.getName();
  }
}
