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
  especialidades!:string[];


}
