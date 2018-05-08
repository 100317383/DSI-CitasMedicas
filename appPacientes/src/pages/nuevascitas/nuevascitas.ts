import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the NuevascitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevascitas',
  templateUrl: 'nuevascitas.html',
})
export class NuevascitasPage {
ayudame(){
     let ventanaAyuda5=document.getElementById('ventanaAyuda5');
     let ventanaNuevacita=document.getElementById('nuevacita');
       if(ventanaAyuda5.style.display!='block'){
    ventanaAyuda5.style.display='block';
    ventanaNuevacita.style.display='none';
  }
  else{
    ventanaAyuda5.style.display='none';
	ventanaNuevacita.style.display='block';
  }
	}
	
	salirdeaqui(){
  let ventanaAyuda5=document.getElementById('ventanaAyuda5');  
  let ventanaNuevacita=document.getElementById('nuevacita');
  ventanaAyuda5.style.display='none';
  ventanaNuevacita.style.display='block';
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
}
 fijarDia(x){
   let botonFecha= document.getElementById('boton_fecha');
   let botonHora= document.getElementById('boton_hora');
   let confirmacion=document.getElementById('confirmacion');
   let tituloConfirmar=document.getElementById('titulo_confirmar');
   let botonConfirmar=document.getElementById('boton_confirmar');
   let elegida=document.getElementById('elegida');
   let dia=x.dateArray[x.lastSelect].date;
   let mes=x.dateArray[x.lastSelect].month+1;
   let año=x.dateArray[x.lastSelect].year;
   let fecha= dia+"/"+mes+"/"+año;
   botonFecha.innerHTML=fecha;
   document.getElementById('divCalendario').style.display='none';
   if(botonHora.textContent!=("Seleccionar hora") && elegida.style.display=='block'){
    confirmacion.style.display='block';
    confirmacion.innerHTML="¿Fijar cita de "+elegida.textContent+" el día "+botonFecha.innerHTML+" a las " + botonHora.innerHTML+"?";
    botonConfirmar.style.display='block';
    tituloConfirmar.style.display='block';
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevascitasPage');
    let confirmacion=document.getElementById('confirmacion');
    let tituloConfirmar=document.getElementById('titulo_confirmar');
    let botonConfirmar=document.getElementById('boton_confirmar');
    let especialidadesArray=document.getElementsByClassName('especialidad');
    let horasArray=document.getElementsByTagName("li");
    let i;
    let especialidades=document.getElementById("especialidades");
    let elegida=document.getElementById("elegida");
    let elegidaTexto=document.getElementById("elegida_texto");
    let divMensaje=document.getElementById("divMensaje");
    let botonFecha=document.getElementById("boton_fecha");
    let botonHora=document.getElementById("boton_hora");
    let calendario=document.getElementById("divCalendario");
    let horario=document.getElementById("divHoras");
    for(i=0; i<especialidadesArray.length;i++){
          especialidadesArray[i].addEventListener('click', function(){
          elegida.style.display='block';
          especialidades.style.display='none';
          elegidaTexto.innerHTML=this.innerHTML;
          divMensaje.style.display='block';
          if(botonHora.textContent!=("Seleccionar hora") && botonFecha.textContent!=("Seleccionar fecha")){
           confirmacion.style.display='block';
           confirmacion.innerHTML="¿Fijar cita de "+this.textContent+" el día "+botonFecha.innerHTML+" a las " + botonHora.innerHTML+"?";
           botonConfirmar.style.display='block';
           tituloConfirmar.style.display='block';
          }
          elegida.addEventListener('click',function(){
            especialidades.style.display='grid';
            elegida.style.display='none';
            divMensaje.style.display='none';
          });
        });
    }
    for(i=0; i<horasArray.length; i++){
        horasArray[i].addEventListener('click', function(){
          botonHora.textContent=this.textContent;
          horario.style.display='none';
          if(botonFecha.textContent!=("Seleccionar fecha") && elegida.style.display=='block'){
           confirmacion.style.display='block';
           confirmacion.innerHTML="¿Fijar cita de "+elegida.textContent+" el día "+botonFecha.innerHTML+" a las " + botonHora.innerHTML+"?";
           botonConfirmar.style.display='block';
           tituloConfirmar.style.display='block';
         }
        });
    }
    botonConfirmar.addEventListener('click', function(){
      let citasPendientes=document.getElementById('citasPendientes');
      let nuevoDiv4 =document.createElement('div');
      let nuevoDiv3 =document.createElement('div');
      let nuevoDiv2 =document.createElement('div');
      let nuevoDiv =document.createElement('div');
      let nuevoP=document.createElement('p');
      let nuevoP2=document.createElement('p');
      let nuevoP3=document.createElement('p');
      let nuevasOpciones =document.createElement('div');
      let pOpciones1=document.createElement("p");
      let pOpciones2=document.createElement("p");
      let boton1=document.createElement("button");
      let boton2=document.createElement("button");
      nuevasOpciones.className="opciones";
      pOpciones1.innerHTML="Modificar";
      pOpciones2.innerHTML="Eliminar";
      boton1.className="botonModificar";
      boton2.className="botonEliminar";
      boton1.appendChild(pOpciones1);
      boton2.appendChild(pOpciones2);
      nuevasOpciones.appendChild(boton1);
      nuevasOpciones.appendChild(boton2);
      nuevoP.innerHTML=elegida.textContent;
      nuevoP2.innerHTML=botonHora.textContent;
      nuevoP3.innerHTML=botonFecha.textContent;
      nuevoDiv.className="citaFinalizada";
      nuevoDiv2.className="infoCita";
      nuevoDiv3.className="infoCita";
      nuevoDiv4.className="infoCita";
      nuevoDiv2.appendChild(nuevoP);
      nuevoDiv3.appendChild(nuevoP2);
      nuevoDiv4.appendChild(nuevoP3);
      nuevoDiv.appendChild(nuevoDiv2);
      nuevoDiv.appendChild(nuevoDiv3);
      nuevoDiv.appendChild(nuevoDiv4);
      citasPendientes.insertBefore(nuevasOpciones, citasPendientes.firstChild);
      citasPendientes.insertBefore(nuevoDiv, citasPendientes.firstChild);
      elegida.style.display='none';
      divMensaje.style.display='none';
      especialidades.style.display='grid';
      botonHora.textContent="Seleccionar hora";
      botonFecha.textContent="Seleccionar fecha";
      horario.style.display='none';
      calendario.style.display='none';
      tituloConfirmar.style.display='none';
      confirmacion.style.display='none';
      botonConfirmar.style.display='none';
      citasPendientes.firstChild.addEventListener('click',function(){
        let opciones=this.nextElementSibling;
        if(opciones.style.display!='block'){
          opciones.style.display='block';
        }
        else{opciones.style.display='none';}
      });
      citasPendientes.children[1].children[1].addEventListener('click',function(){
        let cita=this.parentNode.parentNode.firstChild;
        let aux=this.parentNode;
        cita.style.display='none';
        aux.style.display='none';
      });
    });
    botonFecha.addEventListener('click',function(){
      if(calendario.style.display!='block'){
        calendario.style.display='block';
        horario.style.display='none';
      }
      else{calendario.style.display='none';}
    });
    botonHora.addEventListener('click',function(){
      if(horario.style.display!='block'){
        horario.style.display='block';
        calendario.style.display='none';
      }
      else{horario.style.display='none';}
    });
    }
  }