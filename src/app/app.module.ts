import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { MakeUpComponent } from './Pages/make-up/make-up.component';
import { PrendasComponent } from './Pages/prendas/prendas.component';
import { DetallesPrendaComponent } from './Pages/prendas/detalles-prenda/detalles-prenda.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DetallesMakeupComponent } from './Pages/make-up/detalles-makeup/detalles-makeup.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevaPrendaComponent } from './Pages/prendas/nueva-prenda/nueva-prenda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarPrendaComponent } from './Pages/prendas/editar-prenda/editar-prenda.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevoMaquillajeComponent } from './Pages/make-up/nuevo-maquillaje/nuevo-maquillaje.component';
import { UsersComponent } from './Pages/users/users.component';
import { RegistroComponent } from './Pages/users/registro/registro.component';
import { LoginComponent } from './Pages/users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MakeUpComponent,
    PrendasComponent,
    DetallesPrendaComponent,
    NavbarComponent,
    DetallesMakeupComponent,
    NuevaPrendaComponent,
    EditarPrendaComponent,
    BuscadorComponent,
    BuscadorPipe,
    NuevoMaquillajeComponent,
    UsersComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
