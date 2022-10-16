import { NestFactory } from '@nestjs/core';
import { Logger } from 'gc-json-logger';
import { createNestLogger } from 'gc-json-logger-nestjs';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = createNestLogger(Logger.getLogger());
  const app = await NestFactory.create(AppModule, { logger });
  await app.listen(3000);
}
bootstrap();
