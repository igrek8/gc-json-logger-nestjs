import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AdapterLoggerService } from './adapter-logger.service';
import { APP_LOGGER } from './constants';
import { LoggerMiddleware } from './logger.middleware';
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './logger.module-definition';
import { LoggerService } from './logger.service';

@Module({
  providers: [
    LoggerService,
    AdapterLoggerService,
    {
      provide: APP_LOGGER,
      useClass: AdapterLoggerService,
    },
  ],
  exports: [
    LoggerService,
    AdapterLoggerService,
    {
      provide: APP_LOGGER,
      useClass: AdapterLoggerService,
    },
  ],
})
export class LoggerModule extends ConfigurableModuleClass implements NestModule {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) protected readonly options: typeof OPTIONS_TYPE) {
    super();
  }

  configure(consumer: MiddlewareConsumer) {
    const config = consumer.apply(LoggerMiddleware);
    if (this.options.excludedRoutes) config.exclude(...this.options.excludedRoutes);
    config.forRoutes(...this.options.routes);
  }
}
