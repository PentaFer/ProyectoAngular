import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados-service.service';

@Component({
  selector: 'app-actualiza-coponent',
  templateUrl: './actualiza-coponent.component.html',
  styleUrls: ['./actualiza-coponent.component.css']
})
export class ActualizaCoponentComponent {

  accion:number;

  constructor(private route:ActivatedRoute,private router:Router, private _servicioEmpleados:ServicioEmpleadosService,private _service:EmpleadosServiceService){

  }


  ngOnInit(): void {
    this.empleados = this._service.empleados

    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado= this._service.buscarEmpleado(this.indice)

    this.cuadroNombre = empleado.nombre
    this.cuadroApellido = empleado.apellido
    this.cuadroCargo = empleado.cargo
    this.cuadroSalario = empleado.salario

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

  }

  empleados:Empleado[]=[];


  volverHome(){
    this.router.navigate([""])
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice:number;



 /* actualizarEmpleado() {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this._servicioEmpleados.muestraMensaje('Datos del empleado agregado: ' + miEmpleado.nombre + ' ' + miEmpleado.apellido);
      
      this._service.actualizarEmpleado(this.indice,miEmpleado);
  
      this.router.navigate([""])
    }
    eliminarEmpleado(){
      this._service.eliminarEmpleado(this.indice)
      this.router.navigate([""])

    }*/


    actualizarEmpleado() {

      if(this.accion == 1){
        let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
        //this._servicioEmpleados.muestraMensaje('Datos del empleado agregado: ' + miEmpleado.nombre + ' ' + miEmpleado.apellido);
        
        this._service.actualizarEmpleado(this.indice,miEmpleado);
    
        this.router.navigate([""])
      }else{
        this._service.eliminarEmpleado(this.indice)
        this.router.navigate([""])
      }
    }

  }
  


