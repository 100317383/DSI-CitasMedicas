import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MispacientesPage } from './mispacientes';

@NgModule({
  declarations: [
    MispacientesPage,
  ],
  imports: [
    IonicPageModule.forChild(MispacientesPage),
  ],
})
export class MispacientesPageModule {}
