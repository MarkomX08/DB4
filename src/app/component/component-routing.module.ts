import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbitrosComponent } from './arbitros/arbitros.component';
import { CreateComponent } from './create/create.component';
import { EquiposComponent } from './equipos/equipos.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PrincipalComponent } from './principal/principal.component';
import { TorneosComponent } from './torneos/torneos.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'equipos', component: EquiposComponent},
      {path: 'jugadores', component: JugadoresComponent},
      {path: 'principal', component: PrincipalComponent},
      {path: 'arbitros', component: ArbitrosComponent},
      {path: 'torneos', component: TorneosComponent},
      {path: 'update', component: UpdateComponent},
      {path: 'create', component: CreateComponent},
      {path: '**', redirectTo: 'principal'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
