import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ImagesPage } from '../pages/images/images'
import { MomentModule } from 'angular2-moment';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ImagesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    MomentModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ImagesPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}