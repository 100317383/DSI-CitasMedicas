import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CitasPage} from '../citas/citas';
import {NuevascitasPage} from '../nuevascitas/nuevascitas';
import {HistorialPage} from '../historial/historial';
import {TratamientoPage} from '../tratamiento/tratamiento';
import {PerfilPage} from '../perfil/perfil';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  citasPage=CitasPage;
  nuevascitasPage=NuevascitasPage;
  historialPage=HistorialPage;
  tratamientoPage=TratamientoPage;
  salir(){
	this.navCtrl.pop();
	}
	perfil(){
	this.navCtrl.push(PerfilPage);
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
