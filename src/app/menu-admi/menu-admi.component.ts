import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admi',
  templateUrl: './menu-admi.component.html',
  styleUrls: ['./menu-admi.component.css']
})
export class MenuAdmiComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Acceder1(): void {
    this.router.navigate(['/Agregar-Pedido']);
  }
  Acceder2(): void {
    this.router.navigate(['/Almacen']);
  }
  Acceder3(): void {
    this.router.navigate(['/Agregar-Empleado']);
  }
  Acceder4(): void {
    this.router.navigate(['/']);
  }

}
