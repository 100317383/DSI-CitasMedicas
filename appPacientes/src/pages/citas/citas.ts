import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
	ventanaContainer.style.display='block';
  }
	}
	
	salirdeaqui(){
  let ventanaAyuda1=document.getElementById('ventanaAyuda1');  
  let ventanaContainer=document.getElementById('container');
  ventanaAyuda1.style.display='none';
  ventanaContainer.style.display='block';
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitasPage');
    let botonesEliminarArray=document.getElementsByClassName("botonEliminar");
    let i;
    let arrayCitas=document.getElementsByClassName("citaFinalizada");
    for(i=0; i<arrayCitas.length;i++){
      arrayCitas[i].addEventListener('click',function(){
          let opciones=this.nextElementSibling;
          if(opciones.style.display!='block'){
            opciones.style.display='block';
          }
          else{opciones.style.display='none'}
      });
    }
    for(i=0; i<botonesEliminarArray.length;i++){
      botonesEliminarArray[i].addEventListener('click',function(){
        this.parentNode.previousElementSibling.style.display='none';
        this.parentNode.style.display='none';
      });
    }
  }
}
