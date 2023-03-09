import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { request } from 'http';
import { AdapterLoggerService } from '../src';
import { AppModule } from './demo.module';

(async () => {
  const logger = new AdapterLoggerService();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger });
  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3000);
  request('http://localhost:3000', { method: 'POST' }).end();
})();
