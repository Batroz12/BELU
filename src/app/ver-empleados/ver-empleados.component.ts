import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../Interfaces/Empleado';
import { AgregarService } from '../Servicios/agregar.service';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

  @Input() empleadoLista:Empleado;

  @Input() indice:number;
  ListaEmp: Empleado[]=[];
  constructor(private agregarEmpleadoService:AgregarService){ }

  ngOnInit(): void{
    this.obtenerEmpleados();
  }
  obtenerEmpleados(){
    this.agregarEmpleadoService.getEmpleados()
    .subscribe(data=> {
      this.ListaEmp = data;
    });
  }

  // items = [''];

  // AgregarCaracteristica(newItem:string){
  //   this.items.push(newItem);
  //   console.log(this.items)
  // }
}
