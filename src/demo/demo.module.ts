import { Module } from '@nestjs/common';
import { TracingModule } from 'trace-nestjs';
import { LoggerModule } from '../';
import { DemoController } from './demo.controller';
import { Logger } from 'gc-json-logger';

@Module({
  imports: [
    TracingModule.register({
      // specify which routes to trace
      routes: ['*'],
      onRequest(uuid, next) {
        // set a logger for the async context
        Logger.runWith(new Logger(uuid), next);
      },
    }),
    LoggerModule.register({
      // specify which routes to log
      routes: ['*'],
    }),
  ],
  controllers: [DemoController],
})
export class AppModule {}
