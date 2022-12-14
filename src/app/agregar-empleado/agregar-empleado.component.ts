import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Interfaces/Empleado';
import { AgregarService } from '../Servicios/agregar.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
  ListaEmp: Empleado[]=[];
  constructor(private agregarEmpleadoService:AgregarService){
  }
  ngOnInit(): void{
    this.obtenerEmpleados();
  }
  obtenerEmpleados(){
    this.agregarEmpleadoService.getEmpleados()
    .subscribe(data=> {
      this.ListaEmp = data;
    });
  }
  eliminar(id: any) {
     this.agregarEmpleadoService.eliminarEmpleadoService(id)
     .subscribe(data => {
       this.obtenerEmpleados();
     })
  }
  public empleado:Empleado=this.EmpleadoVacio();
  public posicion: number = -1
  esEdicion:boolean=false;
  Agregar(): void {
    this.agregarEmpleadoService.AgregarEmpleadoService(this.empleado);
    this.empleado=this.EmpleadoVacio();
    }
       EmpleadoVacio(): Empleado{
       return{
         Id: 0,
         Nombre:"",
         Apellido:"",
         Edad: "",
         Usuario:""
       };
    }
  editar(i: number): void {
  // this.agregarEmpleadoService.editarEmpleadoService(this.posicion);
    this.esEdicion=true;
    this.empleado=this.cargaEmpleado(this.ListaEmp[i]);
    this.posicion=i;
  };
  cargaEmpleado(empleado:Empleado): Empleado{
    return{
    Id: empleado.Id,
    Nombre:empleado.Nombre,
    Apellido:empleado.Apellido,
    Edad: empleado.Edad,
    Usuario:empleado.Usuario
    };
  };
  AceptarEdicion():void{
    this.agregarEmpleadoService.editarEmpleadoService(this.posicion,this.empleado);
    this.esEdicion=false;
    this.empleado=this.EmpleadoVacio();
    };
  // eliminar(i: number):void{
  //   this.agregarEmpleadoService.eliminarEmpleadoService(this.posicion);
  //   };
   }

//   title = 'MinimarketBelu';
//   esEdicion:boolean=false;

//   constructor(private agregarEmpleadoService:AgregarService){
//     this.ListaEmp = agregarEmpleadoService.ListaEmp;
//   }
//   // public Empleado01: Empleado ={
//   //   Id: 1,
//   //   Nombre: "David",
//   //   Apellido: "Siclla",
//   //   Edad: "21",
//   //   Usuario: "Batroz"
//   // }
//   ListaEmp: Empleado[]=[];
//   public empleado:Empleado=this.EmpleadoVacio();
//   public posicion: number = -1
//   Agregar(): void {
//     this.agregarEmpleadoService.AgregarEmpleadoService(this.empleado);
//     this.empleado=this.EmpleadoVacio();
//   }
//   EmpleadoVacio(): Empleado{
//   return{
//     Id: 0,
//     Nombre:"",
//     Apellido:"",
//     Edad: "",
//     Usuario:""
//   };
//  }


//    editar(i: number):void{
//     // this.agregarEmpleadoService.editarEmpleadoService(this.posicion);
//     this.esEdicion=true;
//     this.empleado=this.cargaEmpleado(this.ListaEmp[i]);
//     this.posicion=i;
//   };

//    cargaEmpleado(empleado:Empleado): Empleado{
//     return{
//       Id: empleado.Id,
//       Nombre:empleado.Nombre,
//       Apellido:empleado.Apellido,
//       Edad: empleado.Edad,
//       Usuario:empleado.Usuario
//     };
//    }
//    AceptarEdicion():void{
//     this.agregarEmpleadoService.editarEmpleadoService(this.posicion,this.empleado);
//     this.esEdicion=false;
//     this.empleado=this.EmpleadoVacio();
//    }


