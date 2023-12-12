import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { HttpClientModule, withInterceptors } from '@angular/common/http';
import { shortInterceptor } from './services/short.interceptor';

import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([HttpClientModule]),
    provideHttpClient(withInterceptors([shortInterceptor])),
  ],
};
