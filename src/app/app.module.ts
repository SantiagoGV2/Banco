import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Persona/add/add.component';
import { RegistrarComponent } from './Persona/registrar/registrar.component';
import { HomeComponent } from './home/home.component';
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
import { CreditoComponent } from './Empleado/credito/credito.component';
import { ProductoComponent } from './Persona/producto/producto.component';
import { CuentasComponent } from './Empleado/cuentas/cuentas.component';
import { DebitoComponent } from './Empleado/debito/debito.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    RegistrarComponent,
    HomeComponent,
    SolicitudComponent,
    CreacionComponent,
    SesionComponent,
    SesionCComponent,
    OlvidarCComponent,
    OlvidarEComponent,
    HomeEmpleadoComponent,
    EntregaComponent,
    ProductosComponent,
    SolicitudesComponent,
    CreditoComponent,
    ProductoComponent,
    CuentasComponent,
    DebitoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
