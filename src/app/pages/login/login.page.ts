import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  admin:any = {
    usuario:'admin@gmail.com',
    contraseña:'12341234'

  }
  
  arregloPersona: any = {
    nombre:'Jose',
    apellido: 'Rodriguez',
    edad:25
  }

  listaP: any =[
    {
      id:1,
      comuna:''
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  irRegistro(){
    this.router.navigate(['/registrar']);
  }
  irPagina(){
    this.router.navigate(['/principal']);
  }

}
