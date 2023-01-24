import { LoginComponent } from './Pages/users/login/login.component';
import { RegistroComponent } from './Pages/users/registro/registro.component';
import { NuevoMaquillajeComponent } from './Pages/make-up/nuevo-maquillaje/nuevo-maquillaje.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { EditarPrendaComponent } from './Pages/prendas/editar-prenda/editar-prenda.component';
import { NuevaPrendaComponent } from './Pages/prendas/nueva-prenda/nueva-prenda.component';
import { DetallesMakeupComponent } from './Pages/make-up/detalles-makeup/detalles-makeup.component';
import { PrendasComponent } from './Pages/prendas/prendas.component';
import { DetallesPrendaComponent } from './Pages/prendas/detalles-prenda/detalles-prenda.component';
import { MakeUpComponent } from './Pages/make-up/make-up.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"maquillaje", component: MakeUpComponent},
  {path:"maquillaje/:id", component: DetallesMakeupComponent},
  {path: "subirMaquillaje", component: NuevoMaquillajeComponent},
  {path:"prendas", component: PrendasComponent},
  {path:"prendas/:id", component: DetallesPrendaComponent},
  {path:"subirPrenda", component: NuevaPrendaComponent},
  {path:"editarPrenda/:id", component: EditarPrendaComponent},
  {path: "buscador", component: BuscadorComponent},
  {path:"registro", component: RegistroComponent},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
