import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeUpService {

  constructor(private http: HttpClient) { }
  public obtenerMaquillaje(): Observable<any>{
    return this.http.get("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/maquillaje");
  }
  public obtenerProducto(id: string): Observable<any>{
    return this.http.get("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/maquillaje/" + id);
  }
  public crearProducto(nuevoProducto:any){
    return this.http.post("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/maquillaje/create", nuevoProducto);
  }
  public eliminarProducto(id:string){
    return this.http.delete("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/maquillaje/delete/"+ id)
  }
}
