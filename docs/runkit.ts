import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from 'gc-json-logger';
import { createNestLogger, LoggerModule } from 'gc-json-logger-nestjs';

@Module({
  imports: [
    LoggerModule.register({
      /**
       * 1) Specify routes to log
       */
      configure: (middleware) => middleware.forRoutes('*'),
      /**
       * 2) Transform log entries before writing
       */
      transform: (_req, _res, entry) => entry,
    }),
  ],
})
class AppModule {}

/**
 * 3) Bootstrap
 */
(async () => {
  const logger = createNestLogger(Logger.getLogger());
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger });
  await app.listen(3000);
  logger.log('Accepting at http://localhost:3000');
})();
