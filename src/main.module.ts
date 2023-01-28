import { Module, Provider } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { ApiServerConfig } from '@app/@common/config/app.config';
import { HttpExceptionFilter } from '@app/@common/exception-filters/http-exception.filter';
import { JoiValidationExceptionFilter } from '@app/@common/exception-filters/joi-validation-exception.filter';
import { HttpLoggingInterceptor } from '@app/@common/interceptors/http-logging.interceptor';
import { ExamplesModule } from '@app/example/example.module';

const providers: Provider[] = [
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  {
    provide: APP_FILTER,
    useClass: JoiValidationExceptionFilter,
  },
  // {
  //   provide: CoreDITokens.CommandBus,
  //   useClass: NestCommandBusAdapter,
  // },
  // {
  //   provide: CoreDITokens.QueryBus,
  //   useClass: NestQueryBusAdapter,
  // },
  // {
  //   provide: CoreDITokens.EventBus,
  //   useClass: NestEventBusAdapter,
  // }
];

if (ApiServerConfig.LOG_ENABLE) {
  providers.push({
    provide: APP_INTERCEPTOR,
    useClass: HttpLoggingInterceptor,
  });
}

@Module({
  imports: [ExamplesModule],
  providers,
})
export class MainModule {}
