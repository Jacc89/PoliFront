import { Injectable } from '@angular/core';
import { Categoria, Servicio } from '../../../../core/models/servicio';




@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private servicios: Servicio[] = [
    {
      id: 1,
      Numservicio: 101,
      categoria: 'Servicios en la Nube',
      nombre: 'Hosting',
      descripcion: 'Servicio de hosting web compartido',
      precio: 10000,
      cantidad: 10,
      promocion: false,
      imagen: 'img/Serv01.jpg',

    },
    {
      id: 2,
      Numservicio: 102,
      categoria: 'Consultoría y Soporte',
      nombre: 'Soporte Técnico',
      descripcion: 'Soporte técnico especializado 24/7',
      precio: 20000,
      cantidad: 5,
      promocion: false,
      imagen: 'img/Serv02.jpg',
    },
    {
      id: 3,
      Numservicio: 103,
      categoria: 'Consultoría y Soporte',
      nombre: 'Consultoría',
      descripcion: 'Consultoría en desarrollo de software',
      precio: 30000,
      cantidad: 6,
      promocion: true,
      imagen: 'img/Serv03.jpg',
    },
    {
      id: 4,
      Numservicio: 104,
      categoria: 'Marketing y Presencia Digital',
      nombre: 'Sitios web corporativos',
      descripcion: 'Páginas modernas y responsivas.',
      precio: 40000,
      cantidad: 65,
      promocion: true,
      imagen: 'img/images8.jpg',
    },
    {
      id: 5,
      Numservicio: 105,
      categoria: 'Transformación Digital e Innovación',
      nombre: 'Internet de las Cosas (IoT)',
      descripcion: 'Conecta tus dispositivos para mayor eficiencia.',
      precio: 36000,
      cantidad: 92455,
      promocion: false,
      imagen: 'img/descarga5.jpg',
    },
    {
      id: 6,
      Numservicio: 106,
      categoria: 'Ciberseguridad y Gestión de Riesgos',
      nombre: 'Auditoría de seguridad',
      descripcion: 'Evaluación completa de vulnerabilidades.',
      precio: 45000,
      cantidad: 52,
      promocion: true,
      imagen: 'img/descarga6.jpg',
    },
    {
      id: 7,
      Numservicio: 107,
      categoria: 'Marketing y Presencia Digital',
      nombre: 'Gestión de redes sociales',
      descripcion: 'Manejo profesional de tu marca digital.',
      precio: 105000,
      cantidad: 90,
      promocion: false,
      imagen: 'img/images1.jpg',
    },
    {
      id: 8,
      Numservicio: 102,
      categoria: 'Servicios en la Nube',
      nombre: 'Administración cloud',
      descripcion: 'Gestión y monitoreo de servidores en la nube.',
      precio: 20000,
      cantidad: 5,
      promocion: false,
      imagen: 'img/images2.jpg',
    },
    {
      id: 9,
      Numservicio: 103,
      categoria: 'Consultoría y Soporte',
      nombre: 'Respaldo y almacenamiento',
      descripcion: 'Copias seguras y accesibles desde cualquier lugar.',
      precio: 130000,
      cantidad: 4,
      promocion: true,
      imagen: 'img/images3.jpg',
    },
    {
      id: 10,
      Numservicio: 104,
      categoria: 'Infraestructura y Redes',
      nombre: 'Servidores físicos y virtuales',
      descripcion: 'Configuración y administración.',
      precio: 30000,
      cantidad: 4,
      promocion: true,
      imagen: 'img/images4.jpg',
    },

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
