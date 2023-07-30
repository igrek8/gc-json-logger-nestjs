import { Body, Controller, HttpCode, INestApplication, Post } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { Logger as ContextLogger } from 'gc-json-logger';
import { LoggerModule } from './logger.module';
import { Logger } from './logger';

jest.useFakeTimers();
jest.setSystemTime(0);

@Controller()
class TestController {
  protected readonly logger = new Logger(TestController.name);

  @Post('/echo')
  @HttpCode(200)
  echo(@Body() echo: object) {
    this.logger.info('received data', { echo });
    return { ...echo };
  }

  @Post('/ignore')
  ignore() {}
}

describe('LoggerModule', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        LoggerModule.register({
          routes: ['*'],
          excludedRoutes: ['/ignore'],
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
    const log = jest.spyOn(ContextLogger.prototype, 'log');
    log.mockImplementation(() => {});
    await request(app.getHttpServer())
      .post('/echo')
      .set('user-agent', 'curl/7.64.1')
      .set('referer', 'https://example.com/')
      .send({ message: 'test' });
    expect(log.mock.calls).toMatchSnapshot();
  });

  it('ignores excluded routes', async () => {
    const log = jest.spyOn(ContextLogger.prototype, 'log');
    log.mockImplementation(() => {});
    await request(app.getHttpServer()).post('/ignore');
    expect(log).not.toHaveBeenCalled();
  });
});
