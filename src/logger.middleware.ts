import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { log } from 'gc-json-logger-express';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './logger.module-definition';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) protected readonly options: typeof OPTIONS_TYPE) {}

  use(req: Request, res: Response, next: NextFunction) {
    return log(this.options.transform)(req, res, next);
  }
}
