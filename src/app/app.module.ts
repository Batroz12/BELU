import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    VerEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
