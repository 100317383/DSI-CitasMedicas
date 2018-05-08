import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {CitasPage} from '../citas/citas';
/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {
	ayudame(){
     let ventanaAyuda1=document.getElementById('ventanaAyuda1');
     let ventanaContainer=document.getElementById('container');
       if(ventanaAyuda1.style.display!='block'){
    ventanaAyuda1.style.display='block';
    ventanaContainer.style.display='none';
  }
  else{
    ventanaAyuda1.style.display='none';
	ventanaContainer.style.display='grid';
  }
	}

	salirdeaqui(){
  let ventanaAyuda1=document.getElementById('ventanaAyuda1');
  let ventanaContainer=document.getElementById('container');
  ventanaAyuda1.style.display='none';
  ventanaContainer.style.display='grid';
	}


	modificar(){

	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  // var nav=this.navCtrl;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MispacientesPage');
    let arrayBotones=document.getElementsByClassName('paciente');
    let i;
    for(i=0;i<arrayBotones.length;i++){
      arrayBotones[i].addEventListener('click', function(){
        this.parentNode.parentNode.style.display='none';
      });
    }
  }

}
