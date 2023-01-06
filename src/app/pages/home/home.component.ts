import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // se declara un valor bolleano para la variable personalizar y utilizar en directiva ngIF
  personalizar!:any;

  // se declara las variables para recibir y mostrar datos
  nombres:string = 'Jimmy Aldair';
  apellidos:string = 'Cruz Perez';
  edad:string = '26';
  listaEspecialidades = ['Contabilidad', 'Ing. Computacion y Sistemas'];

  // funcion que permite añadir datos al array de especialidades
  add(espcialidades:String){
    this.listaEspecialidades.push(String(espcialidades));
  }

}
