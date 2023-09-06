import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados-service.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {


  constructor(private router:Router, private _servicioEmpleados:ServicioEmpleadosService,private _service:EmpleadosServiceService){

  }


  ngOnInit(): void {
    this.empleados = this._service.empleados

  }

  empleados:Empleado[]=[];


  volverHome(){
    this.router.navigate([""])
  }

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

      this.router.navigate([""])
    }
  }
}
