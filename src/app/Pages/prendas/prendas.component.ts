import { HttpClient } from '@angular/common/http';
import { PrendasService } from './../../Services/prendas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prendas',
  templateUrl: './prendas.component.html',
  styleUrls: ['./prendas.component.scss']
})
export class PrendasComponent implements OnInit{

  misPrendas?: any[]

  handleSearch(value:string){
    this.filtro_valor = value;
  }
  filtro_valor = ""
  constructor(private prendasService: PrendasService, private http: HttpClient)
  {
    this.prendasService.obtenerPrendas().subscribe((data:any) => 
    {console.log(data);
    this.misPrendas = [...data]})
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/ropa").subscribe(
      (ropa: any[]) => this.prendas = ropa
    )
  }
  prendas = []
}
