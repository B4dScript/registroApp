import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil-clases',
  templateUrl: './perfil-clases.page.html',
  styleUrls: ['./perfil-clases.page.scss'],
})
export class PerfilClasesPage implements OnInit {

  datosClase = {};
  listaClases = [];

  constructor(public ruta: ActivatedRoute,private storage: StorageService,private alertController : AlertController,private router : Router ) { }

  async ngOnInit() {
    await this.cargarClase()
  }


  async cargarClase(){
    this.ruta.paramMap.subscribe( us =>{
      this.datosClase = this.storage.getDatoById('clase',us.get('claseID')).then(res =>
        this.listaClases.push(res))
    })
  }

  async modificar(){
    await this.storage.modificar('clase',this.listaClases[0])
    let alert = await this.alertController.create({
      message: 'Clase Modificada',
      buttons: ['OK']
    })
    alert.present();
  }

  async eliminar(id){
    let alert = await this.alertController.create({
      message: 'Estas seguro de eliminar esta clase ?',
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
            await this.storage.eliminarById('clase',id);
            await this.router.navigate(['/admin-page'])
          }
        }
      ]
    });
    alert.present();
  }
}
