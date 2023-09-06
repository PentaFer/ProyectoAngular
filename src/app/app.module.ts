import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponentComponent } from './empleado-hijo-component/empleado-hijo-component.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosServiceService } from './empleados-service.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaCoponentComponent } from './actualiza-coponent/actualiza-coponent.component';
import { ErorPersonalizadoComponentComponent } from './eror-personalizado-component/eror-personalizado-component.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes',component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaCoponentComponent},
  {path:'**', component:ErorPersonalizadoComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponentComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaCoponentComponent,
    ErorPersonalizadoComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
