import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {



  //constructor(private _servicioEmpleado:ServicioEmpleadosService){}

  cuadroCaracteristica:string=""
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregarCaracteristicas(value:string){
    if (value.trim() === '') {
      // Muestra una alerta si el valor está vacío
      alert('Por favor, ingrese una característica');
    } else {
      this.caracteristicasEmpleados.emit(value);
      //this._servicioEmpleado.muestraMensaje('Caracteristicas: ' + value);
      this.cuadroCaracteristica= ''
    }
  }
}
