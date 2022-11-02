import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { AgregarPedidoComponent } from './agregar-pedido/agregar-pedido.component';
import { AgregarProductoAlmacenComponent } from './agregar-producto-almacen/agregar-producto-almacen.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { LoginComponent } from './login/login.component';
import { MenuAdmiComponent } from './menu-admi/menu-admi.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';

const routes: Routes = [

  {path:'', component: MenuPrincipalComponent},
  {path:'Pedidos', component:PedidosComponent},
  {path:'Login', component: LoginComponent},
  {path:'Menu-Admi', component: MenuAdmiComponent},
  {path:'Agregar-Pedido', component: AgregarPedidoComponent},
  {path:'Listar-Pedidos', component: ListarPedidosComponent},
  {path:'Editar-Pedidos/:id', component: AgregarPedidoComponent},
  {path:'Agregar-Empleado', component: AgregarEmpleadoComponent},
  {path:'Ver-Empleado', component: VerEmpleadosComponent},
  {path:'Almacen', component: AgregarProductoAlmacenComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
