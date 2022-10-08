import { Severity } from 'gc-json-logger';
import { LogEntryMetadata } from 'gc-json-logger-express';

export interface LogEntry {
  severity: Severity;
  message: string;
  meta?: LogEntryMetadata;
}
