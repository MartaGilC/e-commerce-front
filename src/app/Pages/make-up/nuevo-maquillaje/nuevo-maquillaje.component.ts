import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MakeUpService } from './../../../Services/make-up.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-maquillaje',
  templateUrl: './nuevo-maquillaje.component.html',
  styleUrls: ['./nuevo-maquillaje.component.scss']
})
export class NuevoMaquillajeComponent implements OnInit{
  nuevoProducto: any= {
    nombre:"",
    marca:"",
    color:"",
    precio:"",
    imagen:"",
    imagen1:"",
    imagen2:""
  };
  maquillajeForm!: FormGroup;
  
  constructor(private makeupService: MakeUpService, private formBuilder: FormBuilder, private router: Router){

  }

  ngOnInit(): void {
    this.maquillajeForm = this.formBuilder.group({
      nombre:["",[Validators.required]],
      marca:[""],
      color:["",[Validators.required]],
      precio:["",[Validators.required]],
      imagen:["",[Validators.required]],
      imagen1:[""],
      imagen2:[""]
    })
    this.maquillajeForm.valueChanges.subscribe((changes) => {
      this.nuevoProducto = changes;
    })
  }
  onSubmit(){
    this.makeupService.crearProducto(this.nuevoProducto).subscribe();
    this.router.navigate(["/maquillaje"])
  }
}
