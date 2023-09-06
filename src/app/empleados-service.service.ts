import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {


  constructor(private _serviceInyectado:ServicioEmpleadosService){

  }


  empleados:Empleado[]=[

    new Empleado("Ariel","Madrid","Desarrollador",5000),
    new Empleado("Mariana","Patilongo","Psicologa",7500)
  ];


  agregarEmpleadoService(empleado:Empleado){
    this._serviceInyectado.muestraMensaje("Persona que se va agregar: " + "\n"+
    empleado.nombre + "\n"+ "Salario: " + empleado.salario);
    this.empleados.push(empleado)
  }

  buscarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice]
    return empleado
  }

  actualizarEmpleado(indice:number,empleado:Empleado){
    let empleadoModificado= this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre
    empleadoModificado.apellido = empleado.apellido
    empleadoModificado.cargo = empleado.cargo
    empleadoModificado.salario = empleado.salario
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1)
    
  }
  
}
