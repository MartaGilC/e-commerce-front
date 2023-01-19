import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PrendasService } from './../../../Services/prendas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-prenda',
  templateUrl: './editar-prenda.component.html',
  styleUrls: ['./editar-prenda.component.scss']
})
export class EditarPrendaComponent implements OnInit{
  prendasForm!: FormGroup;
  prendaEditada: any;
  id: any;
  constructor(private activateRoute: ActivatedRoute, private prendasService: PrendasService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((params)=> {
      this.id = params.get("_id");
      this.prendasService.obtenerPrenda(this.id).subscribe(data => {
        console.log(data)
        this.prendaEditada = data;

        this.prendasForm = this.formBuilder.group({
          nombre:[this.prendaEditada.nombre,[Validators.required]],
          tipo:[this.prendaEditada.tipo,[Validators.required]],
          color:[this.prendaEditada.color,[Validators.required]],
          precio:[this.prendaEditada.precio,[Validators.required]],
          talla:[this.prendaEditada.talla,[Validators.required]],
          imagen:[this.prendaEditada.imagen,[Validators.required]],
        })
      });
    })

  this.prendasForm.valueChanges.subscribe((changes)=>{
    this.prendaEditada = changes;
  })
  }
  onFileChange(event: any){
    const file = event?.target.files[0];
    this.prendasForm.patchValue({
      imagen: file
    })
  }
  onSubmit(){
    const formData = new FormData();
    formData.append("nombre", this.prendasForm.get("nombre")?.value);
    formData.append("tipo", this.prendasForm.get("tipo")?.value);
    formData.append("color", this.prendasForm.get("color")?.value);
    formData.append("precio", this.prendasForm.get("precio")?.value);
    formData.append("talla", this.prendasForm.get("talla")?.value);
    formData.append("imagen", this.prendasForm.get("imagen")?.value);
    this.prendasService.editarPrenda(this.id, formData).subscribe(()=>
    this.router.navigate(["/prendas"])
    )
  }
}
