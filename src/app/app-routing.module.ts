import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './Persona/registrar/registrar.component';
import { SolicitudComponent } from './Persona/solicitud/solicitud.component';
import { CreacionComponent } from './Empleado/creacion/creacion.component';
import { SesionComponent } from './Empleado/sesion/sesion.component';
import { SesionCComponent } from './Persona/sesion-c/sesion-c.component';
import { OlvidarCComponent } from './Persona/olvidar-c/olvidar-c.component';
import { OlvidarEComponent } from './Empleado/olvidar-e/olvidar-e.component';
import { HomeEmpleadoComponent } from './home-empleado/home-empleado.component';
import { EntregaComponent } from './Empleado/entrega/entrega.component';
import { ProductosComponent } from './Empleado/productos/productos.component';
import { SolicitudesComponent } from './Empleado/solicitudes/solicitudes.component';
import { ProductoComponent } from './Persona/producto/producto.component';
import { CreditoComponent } from './Empleado/credito/credito.component';
import { CuentasComponent } from './Empleado/cuentas/cuentas.component';
import { DebitoComponent } from './Empleado/debito/debito.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: '', component: HomeComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'creacion', component: CreacionComponent},
  {path: 'sesionE', component: SesionComponent},
  {path: 'sesionC', component: SesionCComponent},
  {path: 'olvidarC', component: OlvidarCComponent},
  {path: 'olvidarE', component: OlvidarEComponent},
  {path: 'homeEmpleado', component: HomeEmpleadoComponent},
  {path: 'entrega', component: EntregaComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'credito', component: CreditoComponent},
  {path: 'cuentas', component: CuentasComponent},
  {path: 'debito', component: DebitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
