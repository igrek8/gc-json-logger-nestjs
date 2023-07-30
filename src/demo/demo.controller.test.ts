import { Logger } from '../';
import { DemoController } from './demo.controller';

// prevents writes to stdout
jest.mock('gc-json-logger');

describe('DemoController', () => {
  let controller: DemoController;

  beforeEach(() => {
    controller = new DemoController();
  });

  describe('handler', () => {
    it('should return a string', async () => {
      const info = jest.spyOn(Logger.prototype, 'info');
      expect(controller.handler()).toBe('Hello world!');
      expect(info).toHaveBeenCalledWith('This is a log message!');
    });
  });
});
