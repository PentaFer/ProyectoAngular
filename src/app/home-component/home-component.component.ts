import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  titulo = 'Listado de Empleados';


  constructor(private _servicioEmpleados:ServicioEmpleadosService,private _service:EmpleadosServiceService){
    //this.empleados = this._service.empleados;
  }

  ngOnInit(): void {
    this.empleados = this._service.empleados
  }

  
  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


  agregarEmpleado() {
    // Verifica si algún campo obligatorio está vacío
    if (
      this.cuadroNombre.trim() === '' ||
      this.cuadroApellido.trim() === '' ||
      this.cuadroCargo.trim() === '' ||
      this.cuadroSalario <= 0
    ) {
      // Muestra una alerta si falta algún dato
      alert('Por favor, complete todos los campos correctamente');
    } else {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this._servicioEmpleados.muestraMensaje('Datos del empleado agregado: ' + miEmpleado.nombre + ' ' + miEmpleado.apellido);
      this._service.agregarEmpleadoService(miEmpleado);
  
      // Limpiar cajas
      this.cuadroNombre = '';
      this.cuadroApellido = '';
      this.cuadroCargo = '';
      this.cuadroSalario = 0;
    }
  }
}
