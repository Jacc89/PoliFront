import { Injectable } from '@angular/core';
import { Servicio } from '../../../../core/models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private servicios: Servicio[] = [
    { id: 1, nombre: 'Hosting', descripcion: 'Servicio de hosting web compartido', precio: 10000 },
    { id: 2, nombre: 'Soporte Técnico', descripcion: 'Soporte técnico especializado 24/7', precio: 20000 },
    { id: 3, nombre: 'Consultoría', descripcion: 'Consultoría en desarrollo de software', precio: 30000 }
  ];

  getServicios(): Servicio[] {
    return this.servicios;
  }

  addServicio(servicio: Servicio): void {
    this.servicios.push(servicio);
  }

  removeServicio(id: number): void {
    this.servicios = this.servicios.filter(s => s.id !== id);
  }
}
