import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from './services/servicio-service';
import { Servicio } from '../../../core/models/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-services.html',
  styleUrl: './admin-services.scss'
})
export class AdminServices {
  servicios: Servicio[] = [];

  constructor(private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.servicios = this.servicioService.getServicios();
  }

  remove(id: number) {
    this.servicioService.removeServicio(id);
    this.load();
  }

  verDetalle(servicio: Servicio) {
  console.log('Detalle:', servicio);
  // aquí puedes abrir un modal o redirigir a una vista detalle
}

editar(servicio: Servicio) {
  console.log('Editar:', servicio);
  // aquí podrías cargar el servicio en un formulario
}
  goToCreate() {
    // Aquí puedes implementar la lógica para navegar a la vista de creación de servicios
    this.router.navigate(['/admin/createservices']);
  }
}
