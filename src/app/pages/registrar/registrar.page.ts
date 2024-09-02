import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(private router:Router, public fb: FormBuilder, public alertController:AlertController,) {
    this.formularioRegistro = this.fb.group({
      'Nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required),
      'telefono': new FormControl("",Validators.required),
      'Email': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }
  async irPagina(){

    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header:'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar']
      });
      
      await alert.present();
    }

    this.router.navigate(['/principal']);
  
  }
}
