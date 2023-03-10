import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogged(){
    let token = localStorage.getItem('token');
    if(token){
      this.checkSession().subscribe((data:any)=> {
        if(data._id){
          this.isLoggedIn = true
        }
      })
    }
  }

  public checkSession(){
    return this.http.get('https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/usuarios/checksession').pipe(
      catchError(this.handleError)
    )
  }


  public registrar(nuevoUsuario:any){
    return this.http.post("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/usuarios/create", nuevoUsuario);
  }

  public login(usuario:any){
    return this.http.post("https://e-commerce-back-45ny-cy8pxz1xz-martagilc.vercel.app/usuarios/login", usuario)
  }

  public logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public handleError(error: HttpErrorResponse){
    
    
    localStorage.removeItem('token');
    return throwError(error.error)
    
  }

}
