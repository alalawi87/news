import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShowResultPage } from '../pages/show-result/show-result';
import { ShowPage } from '../pages/show/show';
import { AddGradePage } from '../pages/add-grade/add-grade';
import { PageNewsPage } from '../pages/page-news/page-news';
import { AddStudentPage } from '../pages/add-student/add-student';
import { GlobalveriableProvider } from '../providers/globalveriable/globalveriable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FileProvider } from '../providers/file/file';

@NgModule({
  declarations: [
    MyApp,
    HomePage, ShowResultPage, ShowPage, AddGradePage,AddStudentPage,PageNewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, ShowResultPage, ShowPage, AddGradePage,AddStudentPage,PageNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalveriableProvider,
    HttpClientModule,
    FileProvider,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
