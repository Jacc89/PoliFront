import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrearProductoComponent } from './components/producto/crearProducto/crearProducto.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'crearPro', component:CrearProductoComponent},
  {path:'EditPro/:id', component:CrearProductoComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
