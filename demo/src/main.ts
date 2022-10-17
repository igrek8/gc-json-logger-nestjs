import { Inject } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { Controller, Get, Module } from '@nestjs/common';
import { Logger } from 'gc-json-logger';
import { AdapterLoggerService, APP_LOGGER, LoggerModule, LoggerService } from 'gc-json-logger-nestjs';

@Controller()
export class AppController {
  constructor(
    @Inject(APP_LOGGER) protected readonly defaultLogger: AdapterLoggerService,
    @Inject(LoggerService) protected readonly logger: LoggerService
  ) {}

  @Get('/log')
  demo() {
    this.logger.info('gc-json-logger: do work');
    this.defaultLogger.log('nest-compatible-logger: do work');
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

const logger = Logger.getLogger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new AdapterLoggerService(logger) });
  await app.listen(3000);
}
bootstrap();
