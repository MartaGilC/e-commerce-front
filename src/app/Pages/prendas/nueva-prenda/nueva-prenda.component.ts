import { PrendasService } from './../../../Services/prendas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-nueva-prenda',
  templateUrl: './nueva-prenda.component.html',
  styleUrls: ['./nueva-prenda.component.scss']
})
export class NuevaPrendaComponent implements OnInit{
  nuevaPrenda: any={
    nombre:"",
    tipo:"",
    color:"",
    precio:"", 
    talla:"", 
    imagen:"" 
  };

  prendasForm!: FormGroup

  constructor(private prendaService: PrendasService, private formbuilder: FormBuilder, private router: Router){ }

  ngOnInit(): void{
    this.prendasForm = this.formbuilder.group({
      nombre:["",[Validators.required]],
      tipo:["",[Validators.required]],
      color:["",[Validators.required]],
      precio:["",[Validators.required]],
      talla:["",[Validators.required]],
      imagen:["",[Validators.required]],


    })
    this.prendasForm.valueChanges.subscribe((changes) => {
      this.nuevaPrenda = changes;
    })
  }
  onSubmit(){
    console.log(this.nuevaPrenda)
    this.prendaService.crearPrenda(this.nuevaPrenda).subscribe()
    this.router.navigate(["/prendas"])
  }

}
