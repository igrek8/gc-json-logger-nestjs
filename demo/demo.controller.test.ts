import { LoggerService } from '../src';
import { DemoController } from './demo.controller';

jest.mock('gc-json-logger'); // prevents writes to stdout

describe('DemoController', () => {
  let logger: LoggerService;
  let controller: DemoController;

  beforeEach(() => {
    logger = new LoggerService();
    controller = new DemoController(logger);
  });

  describe('handler', () => {
    it('should return a string', async () => {
      const info = jest.spyOn(logger, 'info');
      expect(controller.handler()).toBe('Hello world!');
      expect(info).toHaveBeenCalledWith('This is a log message!');
    });
  });
});
