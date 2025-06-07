import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IconService } from './service/icon.service';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideMarkdown, MarkedOptions } from 'ngx-markdown';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
export function initializeIcons(iconService: IconService): () => void {
  return () => { };
}

export const appConfig: ApplicationConfig = {
  providers: [

    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHttpClient(), // HttpClient uchun provayder
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [IconService],
      multi: true,
    },
    provideMarkdown(),
    {
      provide: provideMarkdown,
      useValue: {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
      }
    }
  ]
};
