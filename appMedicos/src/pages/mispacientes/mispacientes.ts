import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MispacientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mispacientes',
  templateUrl: 'mispacientes.html',
})
export class MispacientesPage {	
		ayudame(){
     let ventanaAyuda2=document.getElementById('ventanaAyuda2');
     let ventanaContainer2=document.getElementById('container2');
       if(ventanaAyuda2.style.display!='block'){
    ventanaAyuda2.style.display='block';
    ventanaContainer2.style.display='none';
  }
  else{
    ventanaAyuda2.style.display='none';
	ventanaContainer2.style.display='grid';
  }
	}
	
	salirdeaqui(){
  let ventanaAyuda2=document.getElementById('ventanaAyuda2');  
  let ventanaContainer2=document.getElementById('container2');
  ventanaAyuda2.style.display='none';
  ventanaContainer2.style.display='grid';
	}
	
	modificar(){
	let ventanaPaciente2=document.getElementById('ventanaPaciente2');
     let ventanaContainer2=document.getElementById('container2');
       if(ventanaPaciente2.style.display!='block'){
    ventanaPaciente2.style.display='block';
    ventanaContainer2.style.display='none';
  }
  else{
    ventanaPaciente2.style.display='none';
	ventanaContainer2.style.display='grid';
  }
	}
	
	salirdeaqui2(){
	let ventanaPaciente2=document.getElementById('ventanaPaciente2');  
  let ventanaContainer2=document.getElementById('container2');
  ventanaPaciente2.style.display='none';
  ventanaContainer2.style.display='grid';
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //var nav=this.navCtrl;
    
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MispacientesPage');
  }

}


