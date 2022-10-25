import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteCursosPageRoutingModule } from './docente-cursos-routing.module';

import { DocenteCursosPage } from './docente-cursos.page';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteCursosPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [DocenteCursosPage]
})
export class DocenteCursosPageModule {}
