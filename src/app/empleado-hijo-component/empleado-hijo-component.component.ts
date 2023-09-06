import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-component',
  templateUrl: './empleado-hijo-component.component.html',
  styleUrls: ['./empleado-hijo-component.component.css']
})
export class EmpleadoHijoComponentComponent {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;


  arrayCaracteristicas = [''];

  agregarCaracteristicas(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
  
}
