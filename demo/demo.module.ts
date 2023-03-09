import { Module } from '@nestjs/common';
import { TracingModule } from 'trace-nestjs';
import { LoggerModule } from '../src';
import { DemoController } from './demo.controller';

@Module({
  imports: [
    TracingModule.register({
      // specify which routes to trace
      routes: ['*'],
    }),
    LoggerModule.register({
      // specify which routes to log
      routes: ['*'],
    }),
  ],
  controllers: [DemoController],
})
export class AppModule {}
