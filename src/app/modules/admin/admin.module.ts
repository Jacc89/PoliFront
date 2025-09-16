import { createComponent, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CrearProductoComponent } from './components/producto/crearProducto/crearProducto.component';

@NgModule({
  declarations: [
    HomeComponent,
    LogoutComponent,
    HeaderComponent,
    ProductoComponent,
    CrearProductoComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,  // <-- MUY IMPORTANTE
    FormsModule 
  ],
  exports:[LogoutComponent]
})
export class AdminModule { }
