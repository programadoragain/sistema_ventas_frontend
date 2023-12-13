import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TokenInterceptorInterceptor } from './app/security/token-interceptor.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
              importProvidersFrom(HttpClientModule),
              provideRouter(routes), 
              provideAnimations(),
              { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }
            ],
}).catch((err) => console.error(err));
