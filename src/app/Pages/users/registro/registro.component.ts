import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UsersService } from './../../../Services/users.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
nuevoUsuario: any={
  rol:"",
  nombre:"",
  apellidos:"",
  correo:"",
  password:"",
  nacimiento:"",
  imagen:""
};

usuariosForm!: FormGroup

  constructor(private userService: UsersService, private formbuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.usuariosForm = this.formbuilder.group({
      rol:["",[]],
      nombre:["",[Validators.required]],
      apellidos:["",[Validators.required]],
      correo:["",[Validators.required]],
      password:["",[Validators.required]],
      nacimiento:["",[Validators.required]],
      imagen:["",[]]
    })
  
    this.usuariosForm.valueChanges.subscribe((changes)=> {
      this.nuevoUsuario = changes;
    })
  }

  onSubmit(){
    console.log(this.nuevoUsuario)
    this.userService.registrar(this.nuevoUsuario).subscribe()
    this.router.navigate(["/login"])

  }
}
