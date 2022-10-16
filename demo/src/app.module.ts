import { Controller, Get, Module } from '@nestjs/common';
import { LoggerModule, LoggerService } from 'gc-json-logger-nestjs';

@Controller()
export class AppController {
  constructor(protected readonly logger: LoggerService) {}

  @Get('/log')
  demo() {
    this.logger.info('do work');
    return 'data';
  }
}

@Module({
  imports: [
    LoggerModule.register({
      // specify which routes to log
      routes: ['*'],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
