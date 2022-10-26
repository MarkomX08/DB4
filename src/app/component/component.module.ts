import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ArbitrosComponent } from './arbitros/arbitros.component';
import { EquiposComponent } from './equipos/equipos.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TorneosComponent } from './torneos/torneos.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ArbitrosComponent,
    EquiposComponent,
    JugadoresComponent,
    TorneosComponent,
    PrincipalComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ComponentModule { }
