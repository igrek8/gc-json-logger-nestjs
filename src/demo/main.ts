import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { request } from 'http';
import { AdapterLogger } from '../';
import { AppModule } from './demo.module';

(async () => {
  const logger = new AdapterLogger();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger });
  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3000);
  request('http://localhost:3000', { method: 'POST' }).end();
})();
