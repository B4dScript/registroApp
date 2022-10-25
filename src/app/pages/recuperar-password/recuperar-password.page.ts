import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {
  correo: string = '';
  

  constructor(public toastController: ToastController, private usuariosService: UsuariosService, private router:Router) { }

  ngOnInit() {
  }
  async presentoast(){
    const toast= await this.toastController.create({
      message: 'UN MOMENTO PORFAVOR',
      duration: 2000,
      position: "bottom"
    })
    toast.present()
  }

  existe(){
    var correot = this.usuariosService.existecorreo(this.correo);
    if(correot !=undefined){
      alert("correo enviado")
      this.correo = '';
      this.router.navigate(['/login'])
    }else{
      alert("correo no existe")
    }
  }
}
