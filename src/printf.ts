import { format } from 'util';

export function printf(fmt: string, ...args: unknown[]) {
  process.stdout.write(format(fmt, ...args));
}
