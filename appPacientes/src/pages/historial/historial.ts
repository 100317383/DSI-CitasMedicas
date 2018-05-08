import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
ayudame(){
     let ventanaAyuda3=document.getElementById('ventanaAyuda3');
     let ventanaHistorial=document.getElementById('historial');
       if(ventanaAyuda3.style.display!='block'){
    ventanaAyuda3.style.display='block';
    ventanaHistorial.style.display='none';
  }
  else{
    ventanaAyuda3.style.display='none';
	ventanaHistorial.style.display='block';
  }
	}
	
	salirdeaqui(){
  let ventanaAyuda3=document.getElementById('ventanaAyuda3');  
  let ventanaHistorial=document.getElementById('historial');
  ventanaAyuda3.style.display='none';
  ventanaHistorial.style.display='block';
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

}
