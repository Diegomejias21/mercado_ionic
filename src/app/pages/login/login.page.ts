import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;


  admin:any = {
    usuario:'admin@gmail.com',
    password:'12341234'

  }
  
  arregloPersona: any = {
    nombre:'Jose',
    apellido: 'Rodriguez',
    edad:25
  }

  constructor(private router:Router, public fb: FormBuilder, public alertController: AlertController, ) { 
    
    this.formularioLogin = this.fb.group({
      'Email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  irRegistro(){
    this.router.navigate(['/registrar']);
  }
  
  async irPagina(){
    
    var f = this.formularioLogin.value;
    
    var usuarioString = localStorage.getItem('usuario');
    var usuario = usuarioString ? JSON.parse(usuarioString) : null;

    if(usuario.Email == f.Email && usuario.password == f.password){
      console.log('ingresado');
    }else{
      const alert = await this.alertController.create({
        header: 'Los datos son incorrecots',
        message: 'Tienes que rellenar los datos de los campos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }


    this.router.navigate(['/principal']);
  }

}
