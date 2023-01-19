import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeUpService {

  constructor(private http: HttpClient) { }
  public obtenerMaquillaje(): Observable<any>{
    return this.http.get("http://localhost:3000/maquillaje");
  }
  public obtenerProducto(id: string): Observable<any>{
    return this.http.get("http://localhost:3000/maquillaje/" + id);
  }
  public crearProducto(nuevoProducto:any){
    return this.http.post("http://localhost:3000/maquillaje/create", nuevoProducto);
  }
  public eliminarProducto(id:string){
    return this.http.delete("http://localhost:3000/maquillaje/delete/"+ id)
  }
}
