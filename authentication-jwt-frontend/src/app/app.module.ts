import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing-module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {ErrorInterceptor} from "./_interceptor/error-interceptor.service";
import {JwtInterceptor} from "./_interceptor/jwt-interceptor.service";
import { NavigationComponent } from './parts/navigation/navigation.component';
import { UserDetailComponent } from './pages/user-edit/user-detail/user-detail.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
        NavigationComponent,
       
        LoginComponent,
       
        UserDetailComponent
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [CookieService,UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
