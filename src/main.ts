import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { ConfigurationInput, Lightship, createLightship } from 'lightship';

import { ApiServerConfig } from '@app/@common/config/app.config';
import { applySwagger } from '@app/@common/config/swagger.config';

import { MainModule } from './main.module';

const logger = new Logger('Main');
const configuration: ConfigurationInput = {
  detectKubernetes: ApiServerConfig.ENV !== 'production' ? false : true,
  gracefulShutdownTimeout: 30 * 1000,
  port: ApiServerConfig.HEALTH_PORT,
};

async function bootstrap() {
  const lightship: Lightship = await createLightship(configuration);

  const app = await NestFactory.create(MainModule);

  lightship.registerShutdownHandler(() => app.close());

  app.use(helmet());

  app.enableShutdownHooks();

  applySwagger(app);

  await app.listen(ApiServerConfig.PORT).then(() => {
    lightship.signalReady();
    logger.log(
      `🚑 healthcheck is running http://localhost:${ApiServerConfig.HEALTH_PORT}/health`,
    );
    logger.log(
      `🚀 skeleton-api is running in http://localhost:${ApiServerConfig.PORT}`,
    );
  });
}
bootstrap();
