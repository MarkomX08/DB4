import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'Login',
  loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {path:'component',
  loadChildren:()=>import('./component/component.module').then(m=>m.ComponentModule)
  },
  {path:'**', redirectTo: 'component'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
