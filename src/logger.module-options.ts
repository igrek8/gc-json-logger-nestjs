import { RouteInfo } from '@nestjs/common/interfaces';
import { LogTransformFunction } from 'gc-json-logger-express';

export interface LoggerModuleOptions {
  transform?: LogTransformFunction;
  routes: (string | RouteInfo)[];
  excludedRoutes?: (string | RouteInfo)[];
}
