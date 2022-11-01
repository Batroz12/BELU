import { Component, OnInit } from '@angular/core';
import { Administrador } from '../Interfaces/Administrador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public loginAdmin: Administrador[]=[];
  public administrador : Administrador = {
    Correo: "",
    Password: "",
  }

  Acceder(): void {
    this.loginAdmin.push(this.administrador)
    console.log(this.administrador);
    this.router.navigate(['/Menu-Admi']);
  }

}
