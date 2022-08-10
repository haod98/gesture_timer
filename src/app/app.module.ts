import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoginBtnComponent } from './simple-components/login-btn/login-btn.component';

@NgModule({
  declarations: [AppComponent, LoggedInComponent, LoginBtnComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
