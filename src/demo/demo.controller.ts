import { Controller, Post } from '@nestjs/common';
import { Trace } from 'trace-nestjs';
import { Logger } from '../';

@Controller()
export class DemoController {
  protected readonly logger = new Logger(DemoController.name);

  @Post('/')
  @Trace() // add swagger header definition
  handler() {
    this.logger.info('This is a log message!');
    return 'Hello world!';
  }
}
