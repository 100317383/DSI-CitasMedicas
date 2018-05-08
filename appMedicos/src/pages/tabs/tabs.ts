import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CitasPage} from '../citas/citas';
import {MispacientesPage} from '../mispacientes/mispacientes';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  citasPage = CitasPage;
  mispacientesPage = MispacientesPage;
  salir(){
	this.navCtrl.pop();
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewDidLoad(){
 console.log("ionViewDidLoad TabsPage");

  }
}
