import { Injectable } from '@angular/core';
import { Categoria } from '../../../../core/models/servicio';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias: Categoria[] = [
  { id: 1, nombre: 'Desarrollo de Software y Aplicaciones' },
  { id: 2, nombre: 'Servicios en la Nube' },
  { id: 3, nombre: 'Ciberseguridad' },
  { id: 4, nombre: 'Infraestructura y Redes' },
  { id: 5, nombre: 'Transformación Digital e Innovación' },
  { id: 6, nombre: 'Consultoría y Soporte' },
  { id: 7, nombre: 'Marketing y Presencia Digital' }
];
  constructor() { }


  // 🔹 Obtener todas las categorías
  getCategorias(): Observable<Categoria[]> {
    return of(this.categorias);
  }

  // 🔹 Buscar categoría por id
  getCategoriaById(id: number): Observable<Categoria | undefined> {
    return of(this.categorias.find(cat => cat.id === id));
  }

}
