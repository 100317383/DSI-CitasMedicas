import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TratamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tratamiento',
  templateUrl: 'tratamiento.html',
})
export class TratamientoPage {
ayudame(){
     let ventanaAyuda2=document.getElementById('ventanaAyuda2');
     let ventanaRecetas=document.getElementById('recetas');
       if(ventanaAyuda2.style.display!='block'){
    ventanaAyuda2.style.display='block';
    ventanaRecetas.style.display='none';
  }
  else{
    ventanaAyuda2.style.display='none';
	ventanaRecetas.style.display='block';
  }
	}
	
	salirdeaqui(){
  let ventanaAyuda2=document.getElementById('ventanaAyuda2');  
  let ventanaRecetas=document.getElementById('recetas');
  ventanaAyuda2.style.display='none';
  ventanaRecetas.style.display='block';
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TratamientoPage');
  }

}
