import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrendasService {

  constructor(private http: HttpClient) {}

  public obtenerPrendas(): Observable<any>{
    return this.http.get("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/ropa");
  }

  public obtenerPrenda(id:string): Observable<any>{
    return this.http.get("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/ropa/" + id);
  }
  public crearPrenda(nuevaPrenda:any){
    return this.http.post("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/ropa/create/", nuevaPrenda)
  }
  public eliminarPrenda(id:string){
    return this.http.delete("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/ropa/delete"+ id)
  }
  public editarPrenda(id:string, prendaEditada:any){
    return this.http.put("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/ropa/edit", id, prendaEditada)
  }


}
