import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './Persona/registrar/registrar.component';
import { SolicitudComponent } from './Persona/solicitud/solicitud.component';
import { CreacionComponent } from './Empleado/creacion/creacion.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: '', component: HomeComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'creacion', component: CreacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
