import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CalendarModule } from 'ionic3-calendar-en';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CitasPage} from '../pages/citas/citas';
import {NuevascitasPage} from '../pages/nuevascitas/nuevascitas';
import {HistorialPage} from '../pages/historial/historial';
import {TratamientoPage} from '../pages/tratamiento/tratamiento';
import {TabsPage} from '../pages/tabs/tabs';
import {PerfilPage} from '../pages/perfil/perfil';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CitasPage,
    NuevascitasPage,
    HistorialPage,
    TratamientoPage,
    TabsPage,
	PerfilPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CitasPage,
    NuevascitasPage,
    HistorialPage,
    TratamientoPage,
    TabsPage,
	PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
