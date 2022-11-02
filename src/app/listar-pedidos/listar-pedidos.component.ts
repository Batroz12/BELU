import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../Interfaces/Pedido';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {
  @Input() pedidoLista:Pedido;

  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }
}
