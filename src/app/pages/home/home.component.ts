import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personalizar!:any;
  nombres:string = 'Jimmy Aldair';
  apellidos:string = 'Cruz Perez';
  edad:string = '26';
  listaEspecialidades = ['Contabilidad', 'Ing. Computacion y Sistemas'];

  add(espcialidades:String){
    this.listaEspecialidades.push(String(espcialidades));
  }

  // addData(txtdato:String){
  //   this.datos.push(String(txtdato));
  // }
}
