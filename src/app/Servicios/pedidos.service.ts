import { Injectable } from '@angular/core';
import { Pedido } from '../Interfaces/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  ListaPedido: Pedido[]=[{
    Id: 10,
    Cliente: "David",
    Estado: "Entragado",
    Condicion: "Para recoger",
    PrecioTotal: 2000
  }];
  constructor() {
  }
  public pedido:Pedido=this.PedidoVacio();
  public posicion: number = -1
  AgregarPedidoService(pedido: Pedido): void{
    if(this.posicion == -1){
      this.pedido.Id = this.ListaPedido.length+1;
      this.ListaPedido.push(pedido);
      this.pedido= this.PedidoVacio();
      console.log("Hay:",this.ListaPedido.length,"pedidos")
      console.table(this.ListaPedido)
  }
  else{
    let selectPedido: Pedido =  this.ListaPedido[this.posicion];
    selectPedido.Id = this.pedido.Id;
    selectPedido.Cliente = this.pedido.Cliente;
    selectPedido.Estado = this.pedido.Estado;
    selectPedido.Condicion = this.pedido.Condicion;
    selectPedido.PrecioTotal = this.pedido.PrecioTotal;
    this.pedido = this.PedidoVacio();
    this.posicion = -1;
    console.table(this.ListaPedido)
  }
  }
  PedidoVacio(): Pedido{
    return{
      Id: 0,
      Cliente:"",
      Estado:"",
      Condicion: "",
      PrecioTotal:0
    };
  }
  eliminarPedidoService(i:number): void{
    this.ListaPedido.splice(i,1);
    console.table(this.ListaPedido)
   }
   editarPedidoService(i:number, pedidoEditado:Pedido): void{
    this.ListaPedido[i]=pedidoEditado;
    // let selectEmpleado: Empleado =  this.ListaEmp[i];
    // this.empleado.Id = selectEmpleado.Id;
    // this.empleado.Nombre = selectEmpleado.Nombre;
    // this.empleado.Apellido = selectEmpleado.Apellido;
    // this.empleado.Edad = selectEmpleado.Edad;
    // this.empleado.Usuario = selectEmpleado.Usuario;
    // this.posicion = i;
    // console.table(this.ListaEmp)
  };
}
