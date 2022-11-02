import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from '../Interfaces/Pedido';
import { PedidosService } from '../Servicios/pedidos.service';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent {
  esEdicion:boolean=false;

  constructor(private agregarPedidoService:PedidosService){
    this.ListaPedidos = agregarPedidoService.ListaPedido;
  }
  // public Empleado01: Empleado ={
  //   Id: 1,
  //   Nombre: "David",
  //   Apellido: "Siclla",
  //   Edad: "21",
  //   Usuario: "Batroz"
  // }
  ListaPedidos: Pedido[]=[];
  public pedido:Pedido=this.PedidoVacio();
  public posicion: number = -1
  Agregar(): void {
    this.agregarPedidoService.AgregarPedidoService(this.pedido);
    this.pedido=this.PedidoVacio();
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
   eliminar(i: number):void{
    this.agregarPedidoService.eliminarPedidoService(this.posicion);
   };

   editar(i: number):void{
    // this.agregarEmpleadoService.editarEmpleadoService(this.posicion);
    this.esEdicion=true;
    this.pedido=this.cargaPedido(this.ListaPedidos[i]);
    this.posicion=i;
  };

   cargaPedido(pedido:Pedido): Pedido{
    return{
      Id: pedido.Id,
      Cliente:this.pedido.Cliente,
      Estado:pedido.Estado,
      Condicion: pedido.Condicion,
      PrecioTotal:pedido.PrecioTotal
    };
   }
   AceptarEdicion():void{
    this.agregarPedidoService.editarPedidoService(this.posicion,this.pedido);
    this.esEdicion=false;
    this.pedido=this.PedidoVacio();
   }

}
