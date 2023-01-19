import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrendasService {

  constructor(private http: HttpClient) {}

  public obtenerPrendas(): Observable<any>{
    return this.http.get("http://localhost:3000/ropa");
  }

  public obtenerPrenda(id:string): Observable<any>{
    return this.http.get("http://localhost:3000/ropa/" + id);
  }
  public crearPrenda(nuevaPrenda:any){
    return this.http.post("http://localhost:3000/ropa/create/", nuevaPrenda)
  }
  public eliminarPrenda(id:string){
    return this.http.delete("http://localhost:3000/ropa/delete/"+ id)
  }
  public editarPrenda(id:string, prendaEditada:any){
    return this.http.put("http://localhost:3000/ropa/edit/", id, prendaEditada)
  }


}
