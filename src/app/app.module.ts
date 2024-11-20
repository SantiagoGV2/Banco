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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
