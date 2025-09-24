import { Injectable } from '@angular/core';
import { Categoria, Servicio } from '../../../../core/models/servicio';




@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private servicios: Servicio[] = [
    {
      id: 1, nombre: 'Hosting',
      descripcion: 'Servicio de hosting web compartido',
      precio: 10000,
      imagen: 'img/Serv01.jpg',
      cantidad: 10,
      promocion: false,
      categoria: 'Servicios en la Nube',
      Numservicio: 101
    },
    {
      id: 2, nombre: 'Soporte Técnico',
      descripcion: 'Soporte técnico especializado 24/7',
      precio: 20000,
      imagen: 'img/Serv01.jpg',
      cantidad: 5,
      promocion: false,
      categoria: 'Consultoría y Soporte',
      Numservicio: 102
    },
    {
      id: 3, nombre: 'Consultoría',
      descripcion: 'Consultoría en desarrollo de software',
      precio: 30000,
      imagen: 'img/Serv01.jpg',
      cantidad: 4,
      promocion: true,
      categoria: 'Consultoría y Soporte',
      Numservicio: 103
    }
  ];


  getServicios(): Servicio[] {
    return this.servicios;
  }

  getServicioById(id: number): Servicio | undefined {
  return this.servicios.find(s => s.id === id);
}


  addServicio(servicio: Omit<Servicio, 'id'>): void {
    const nextId = this.servicios.length > 0
      ? Math.max(...this.servicios.map(s => s.id)) + 1
      : 1;
    const nuevo: Servicio = { id: nextId, ...servicio };
    this.servicios.push(nuevo);
  }

  removeServicio(id: number): void {
    this.servicios = this.servicios.filter(s => s.id !== id);
  }

}
