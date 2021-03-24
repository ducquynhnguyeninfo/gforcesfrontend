import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderMamagerModule } from './modules/order-mamager/order-mamager.module';
import { CommonUIModule } from './modules/common-ui/common-ui.module';
import { OrderManagerRoutingModule } from './modules/order-mamager/order-mamager-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepositoriesModule } from './repositories/repositories.module';
import { environment } from 'src/environments/environment';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (httpLoaderFactory),
          deps: [HttpClient]
        }
      }
    ),
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,

    AppRoutingModule,
    OrderMamagerModule,
    OrderManagerRoutingModule,
    CommonUIModule,
    RepositoriesModule.forRoot({ rootUrl: '/api/v1' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
