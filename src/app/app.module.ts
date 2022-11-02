import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { AgregarProductoAlmacenComponent } from './agregar-producto-almacen/agregar-producto-almacen.component';
import { VerAlmacenComponent } from './ver-almacen/ver-almacen.component';
import { CaracteristicaAlmacenComponent } from './caracteristica-almacen/caracteristica-almacen.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuAdmiComponent } from './menu-admi/menu-admi.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AgregarPedidoComponent } from './agregar-pedido/agregar-pedido.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    VerEmpleadosComponent,
    CaracteristicasEmpleadoComponent,
    AgregarProductoAlmacenComponent,
    VerAlmacenComponent,
    CaracteristicaAlmacenComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    MenuPrincipalComponent,
    MenuAdmiComponent,
    PedidosComponent,
    AgregarPedidoComponent,
    ListarPedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
