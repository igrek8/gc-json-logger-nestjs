import { Controller, Post } from '@nestjs/common';
import { Trace } from 'trace-nestjs';
import { LoggerService } from '../src';

@Controller()
export class DemoController {
  constructor(protected readonly logger: LoggerService) {}

  @Post('/')
  @Trace() // add swagger header definition
  handler() {
    this.logger.info('This is a log message!');
    return 'Hello world!';
  }
}
