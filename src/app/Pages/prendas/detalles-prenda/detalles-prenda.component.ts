import { PrendasService } from './../../../Services/prendas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-detalles-prenda',
  templateUrl: './detalles-prenda.component.html',
  styleUrls: ['./detalles-prenda.component.scss']
})
export class DetallesPrendaComponent implements OnInit{
  id: any;
  miPrenda: any;
  public active: boolean = false;
  constructor(private activateRoute: ActivatedRoute, private prendasService: PrendasService, private router: Router, public userService: UsersService){
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.prendasService.obtenerPrenda(this.id).subscribe((data: any) => {
        console.log(data);
        this.miPrenda = {...data}
      })
    })
  }

  ngOnInit(): void {
      this.userService.isLogged();
    }
    logout(){
      this.userService.logout();
    }
    setActive(): void{
      this.active = !this.active
    }
  
eliminarPrenda(){
  this.prendasService.eliminarPrenda(this.id).subscribe()
  this.router.navigate(["/prendas"])
}

}
