import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Service } from '../admin.service';
import { SignInPage } from '../pages/sign-in/sign-in';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LandingPage } from '../pages/landing/landing';
import {SignUpPage} from '../pages/sign-up/sign-up';
import {LoadUpOptionsPage} from '../pages/load-up-options/load-up-options';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage,
    DashboardPage,
    LandingPage,
    SignUpPage,
    LoadUpOptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    DashboardPage,
    LandingPage,
    SignUpPage,
    LoadUpOptionsPage
  ],
  providers: [
    Service,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
