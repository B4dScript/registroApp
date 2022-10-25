import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { StorageService } from 'src/app/services/storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string
  password: string

  KEY_personas = 'usuarios';
  KEY_sesion = 'sesion';

  admin  =  {
    id: '1',
    rut:'11.111.111-1',
    nombre:'admin',
    fecha_nac: '2000-03-12',
    correo:'admin@admin.com',
    semestre: 1,
    password: 'admin',
    usuario:'administrador'
  }

  constructor(private alertController: AlertController,private usuariosService: UsuariosService, private router:Router,private storageService :StorageService) {
    
   }



  ngOnInit() {
    console.log(console.log(this.storageService.getDatos(this.KEY_personas)))
  }

  admini = this.storageService.agregar(this.KEY_personas,this.admin);
  async login() {
    //rescatamos el usuario con el método login usuario:
    var usuarioLogin = await this.storageService.validarLogin(this.KEY_personas,this.correo, this.password);
    //validamos si existe el usuario
    if (usuarioLogin != undefined) {
      //UNA VEZ QUE VALIDO QUE EXISTE, ENVIARE ESOS DATOS A LA SIGUIENTE PÁGINA:
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: usuarioLogin
        }
      };
      //PARA ENVIAR EL DATO QUE ESTA LISTO, SE ANEXA AL ROUTER!
      if (usuarioLogin.usuario === 'administrador') {
        this.router.navigate(['/admin-page'], navigationExtras);
      }else if (usuarioLogin.usuario === 'docente'){
        this.router.navigate(['/docente-page'], navigationExtras);
      }else{
        this.router.navigate(['/alumno-page'], navigationExtras);
      }

    } else {
      let alert = await this.alertController.create({
        message: 'Usuario o contrasena incorrectos',
        buttons: ['OK']
      })
      alert.present();
    }
  }

}