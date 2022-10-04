import { LogEntryMetadata, Severity } from 'gc-json-logger';

export interface LogEntry {
  severity: Severity;
  message: string;
  meta?: LogEntryMetadata;
}
