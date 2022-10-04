import { MiddlewareConfigProxy, MiddlewareConsumer } from '@nestjs/common/interfaces';
import { LogTransformFunction } from 'gc-json-logger-express';

export interface LoggerModuleOptions {
  transform?: LogTransformFunction;
  configure(config: MiddlewareConfigProxy): MiddlewareConsumer;
}
