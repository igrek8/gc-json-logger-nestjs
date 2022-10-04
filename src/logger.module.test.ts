import { Body, Controller, HttpCode, INestApplication, Inject, Post } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Logger } from 'gc-json-logger';
import request from 'supertest';
import { LoggerModule } from './logger.module';
import { LoggerService } from './logger.service';

jest.useFakeTimers();
jest.setSystemTime(0);

@Controller()
class TestController {
  constructor(@Inject(LoggerService) protected readonly logger: LoggerService) {}

  @Post('/echo')
  @HttpCode(200)
  echo(@Body() echo: object) {
    this.logger.info('received data', { echo });
    return { ...echo };
  }
}

describe('LoggerModule', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        LoggerModule.register({
          configure: (middleware) => middleware.forRoutes('*'),
        }),
      ],
      controllers: [TestController],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.listen(50000);
  });

  afterAll(async () => {
    await app.close();
  });

  it('logs a request', async () => {
    const log = jest.spyOn(Logger.prototype, 'log');
    log.mockImplementation(() => {});
    await request(app.getHttpServer())
      .post('/echo')
      .set('user-agent', 'curl/7.64.1')
      .set('referer', 'https://example.com/')
      .send({ message: 'test' });
    expect(log.mock.calls).toMatchSnapshot();
  });
});
