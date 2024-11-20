import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './Persona/registrar/registrar.component';
import { SolicitudComponent } from './Persona/solicitud/solicitud.component';
import { CreacionComponent } from './Empleado/creacion/creacion.component';
import { SesionComponent } from './Empleado/sesion/sesion.component';
import { SesionCComponent } from './Persona/sesion-c/sesion-c.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: '', component: HomeComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'creacion', component: CreacionComponent},
  {path: 'sesionE', component: SesionComponent},
  {path: 'sesionC', component: SesionCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
