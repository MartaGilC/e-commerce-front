import { MakeUpService } from './../../../Services/make-up.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-makeup',
  templateUrl: './detalles-makeup.component.html',
  styleUrls: ['./detalles-makeup.component.scss']
})
export class DetallesMakeupComponent implements OnInit{
  id: any;
  miProducto: any;

  constructor(private ActivatedRoute: ActivatedRoute, private makeupService: MakeUpService, private router: Router){

    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.makeupService.obtenerProducto(this.id).subscribe((data: any)=> {
        this.miProducto = {...data}
      })
    })
  }

  ngOnInit(): void {
    
  }
  eliminarProducto(){
    this.makeupService.eliminarProducto(this.id).subscribe()
    this.router.navigate(["/maquillaje"])
  }
  
}
