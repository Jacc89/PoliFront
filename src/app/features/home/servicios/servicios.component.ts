import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone  : true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services =
  [
   { title: "Aplicaciones web personalizadas", descripcion: "Soluciones hechas a la medida de tu negocio." },
   { title: "Aplicaciones móviles", descripcion: "Apps nativas y multiplataforma para llegar a más clientes." },
   { title: "Migración a la nube", descripcion: "Lleva tus sistemas a AWS, Azure o Google Cloud." },
   { title: "Administración cloud", descripcion: "Gestión y monitoreo de servidores en la nube." },
   { title: "Auditoría de seguridad", descripcion: "Evaluación completa de vulnerabilidades." },
   { title: "Redes empresariales", descripcion: "Diseño e instalación de LAN/WAN seguras." },
   { title: "Servidores físicos y virtuales", descripcion: "Configuración y administración." },
   { title: "Consultoría digital", descripcion: "Estrategias para modernizar tu negocio." },
   { title: "Automatización de procesos", descripcion: "Robots que ahorran tiempo y costos." }
  ]
}
