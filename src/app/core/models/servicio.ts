export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad: number;
  promocion: boolean;
  categoria: string;
  Numservicio: number;
}

export interface Categoria {
  id: number;
  nombre: string;
}
