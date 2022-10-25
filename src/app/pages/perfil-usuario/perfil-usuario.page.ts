import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  datos = {
   
  };
  lista = [];

  
  
  constructor(public router : Router, public ruta: ActivatedRoute, private storage: StorageService, private alertController :  AlertController) { }

  async ngOnInit() {
    await this.cargarPersona()
    
  }


  async cargarPersona(){
    this.ruta.paramMap.subscribe( us =>{
      this.datos = this.storage.getDatoById('usuarios',us.get('usuarioID')).then(res =>
        this.lista.push(res))
    })
  }
  

  

  async eliminar(rut){
    let alert = await this.alertController.create({
      message: 'Estas seguro de eliminar este usuario ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.storage.eliminar('usuarios',rut);
            await this.router.navigate(['/admin-page'])
          }
        }
      ]
    });
    alert.present();
  }
  

  async modificar(){
    await this.storage.modificar('usuarios',this.lista[0])
    let alert = await this.alertController.create({
      message: 'Usuario modificado',
      buttons: ['OK']
    })
    alert.present();
  }
}
