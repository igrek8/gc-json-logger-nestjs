# [Structured logging](https://cloud.google.com/logging/docs/structured-logging) for Nest.js application in GKE

Enables structured logging for Nest.js application running in Google Cloud platform.

[![NPM](https://badgen.net/npm/v/gc-json-logger-nestjs)](https://www.npmjs.com/gc-json-logger-nestjs)
[![Coverage Status](https://coveralls.io/repos/github/igrek8/gc-json-logger-nestjs/badge.svg?branch=main)](https://coveralls.io/github/igrek8/gc-json-logger-nestjs?branch=main)
![Release](https://badgen.net/github/checks/igrek8/gc-json-logger-nestjs)
![License](https://badgen.net/github/license/igrek8/gc-json-logger-nestjs)

## Precaution

The logger makes use of [`async_hooks`](https://nodejs.org/api/async_hooks.html#async-hooks) module which is currently **experimental**. However, the use of `async_hooks` mechanism was at basic.

## Installation

```bash
npm install --save \
  gc-json-logger \
  gc-json-logger-express \
  gc-json-logger-nestjs

yarn add \
  gc-json-logger \
  gc-json-logger-express \
  gc-json-logger-nestjs
```

## View in Google Cloud Monitoring

![Google Cloud Monitoring](./docs/images/google-cloud-logging.png)

## Integration

```ts
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
```

## Use with [`jq`](https://github.com/stedolan/jq)

```bash
node ./server.js | jq -r '."logging.googleapis.com/operation".id as $id | { timestamp, severity, $id, message } | join(" ")'
```

```log
2022-01-00T00:00:00.000Z INFO app Starting Nest application...
2022-01-00T00:00:00.000Z INFO app AppModule dependencies initialized
2022-01-00T00:00:00.000Z INFO app LoggerModule dependencies initialized
2022-01-00T00:00:00.000Z INFO app Nest application successfully started
2022-01-00T00:00:00.000Z INFO app Accepting at http://localhost:3000
```
