import { PrendasService } from './../../../Services/prendas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-prenda',
  templateUrl: './detalles-prenda.component.html',
  styleUrls: ['./detalles-prenda.component.scss']
})
export class DetallesPrendaComponent implements OnInit{
  id: any;
  miPrenda: any;
  constructor(private activateRoute: ActivatedRoute, private prendasService: PrendasService, private router: Router){
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.prendasService.obtenerPrenda(this.id).subscribe((data: any) => {
        console.log(data);
        this.miPrenda = {...data}
      })
    })
  }

  ngOnInit(): void {
    
  }
eliminarPrenda(){
  this.prendasService.eliminarPrenda(this.id).subscribe()
  this.router.navigate(["/prendas"])
}

}
