import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  acceder(){
    this.navCtrl.push(TabsPage);
  }

  constructor(public navCtrl: NavController) {
    var nav=this.navCtrl;
    window.addEventListener('DOMContentLoaded', function(){
      document.getElementById('boton').addEventListener('click', abrirVentanaAñadir);
    });
    window.addEventListener('DOMContentLoaded', function(){
      document.getElementById('icono').addEventListener('click', abrirVentanaAyuda);
    });
    window.addEventListener('DOMContentLoaded', function(){
      document.getElementById('iconoSalirAyuda').addEventListener('click', salirVentanaAyuda);
    });
    window.addEventListener('DOMContentLoaded', function(){
      document.getElementById('iconoSalirAñadir').addEventListener('click', salirVentanaAñadir);
    });
    window.addEventListener('DOMContentLoaded', function(){
      document.getElementById('botonAñadir').addEventListener('click', salirVentanaAñadir);
    });
    window.addEventListener('DOMContentLoaded', function(){
      document.getElementById('botonAñadir').addEventListener('click', function(){
      let iA=document.createElement('a');
      let iDiv = document.createElement('div');
      let nombreAux=document.getElementById('nombre') as HTMLInputElement;
      let nombre= nombreAux.value;
      let apellidoAux= document.getElementById('apellido') as HTMLInputElement;
      let apellido= apellidoAux.value;
      let nombreCompleto= nombre+" "+apellido;
      document.getElementById('cuentas').appendChild(iA);
      iDiv.className = 'cuenta';
      iDiv.addEventListener('click', function(){nav.push(TabsPage);});
      iA.appendChild(iDiv);
      let iP= document.createElement('p');
      iP.className='nombreCuenta';
      iP.innerHTML=nombreCompleto;
      iDiv.appendChild(iP);});
    });
  }
}
function abrirVentanaAyuda(){
  let ventanaAyuda=document.getElementById('ventanaAyuda');
  let ventanaAñadir=document.getElementById('ventanaAñadir');
  let noCuenta=document.getElementById('noCuenta');
  let cuentas=document.getElementById('cuentas');
  let boton=document.getElementById('boton');
  boton.style.display='none';
  if(ventanaAyuda.style.display!='block'){
    ventanaAyuda.style.display='block';
    ventanaAñadir.style.display='none';
    noCuenta.style.display='none';
    cuentas.style.display='none';
  }
  else{
    ventanaAyuda.style.display='none';
    noCuenta.style.display='block';
    cuentas.style.display='block';
    boton.style.display='inline-block';

  }
}
function salirVentanaAñadir(){
  let ventanaAñadir=document.getElementById('ventanaAñadir');
  let noCuenta=document.getElementById('noCuenta');
  let textoBoton=document.getElementById('textoBoton');
  let cuentas=document.getElementById('cuentas');
  ventanaAñadir.style.display='none';
  noCuenta.style.display='block';
  cuentas.style.display='block';
  textoBoton.innerHTML="Añadir cuenta";
}
function salirVentanaAyuda(){
  let ventanaAyuda=document.getElementById('ventanaAyuda');
  let noCuenta=document.getElementById('noCuenta');
  let boton=document.getElementById('boton');
  let cuentas=document.getElementById('cuentas');
  ventanaAyuda.style.display='none';
  noCuenta.style.display='block';
  cuentas.style.display='block';
  boton.style.display='inline-block';
}
function abrirVentanaAñadir(){
  let ventanaAñadir=document.getElementById('ventanaAñadir');
  let ventanaAyuda=document.getElementById('ventanaAyuda');
  let noCuenta=document.getElementById('noCuenta');
  let cuentas=document.getElementById('cuentas');
  let textoBoton=document.getElementById('textoBoton');
  if(ventanaAñadir.style.display!='block'){
    ventanaAñadir.style.display='block';
    ventanaAyuda.style.display='none';
    cuentas.style.display='none';
    noCuenta.style.display='none';
    textoBoton.innerHTML="Seleccionar cuenta";
  }
  else{
    ventanaAñadir.style.display='none';
    noCuenta.style.display='block';
    cuentas.style.display='block';
    textoBoton.innerHTML="Añadir cuenta";
  }
}
