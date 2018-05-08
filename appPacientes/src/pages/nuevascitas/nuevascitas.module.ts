import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevascitasPage } from './nuevascitas';

@NgModule({
  declarations: [
    NuevascitasPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevascitasPage),
  ],
})
export class NuevascitasPageModule {}
