import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

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

  constructor(private router:Router, public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController ) { 
    
    this.formularioLogin = this.fb.group({
      'Nombre': new FormControl("",Validators.required),
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
    const f = this.formularioLogin.value;
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      
      if (usuario.Nombre === f.Nombre && usuario.password === f.password && usuario.Email === f.Email) {
        console.log('Ingresado');
        localStorage.setItem('Ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos',
          buttons: ['Aceptar']
      });

      await alert.present();
    }
    this.router.navigate(['/principal']);
  }
 }
}
