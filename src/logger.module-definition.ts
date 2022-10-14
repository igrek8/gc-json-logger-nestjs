import { ConfigurableModuleBuilder } from '@nestjs/common';
import { LoggerModuleOptions } from './logger.module-options';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<LoggerModuleOptions>()
    .setExtras({ global: true }, (definition, extras) => ({ ...definition, global: extras.global }))
    .build();
