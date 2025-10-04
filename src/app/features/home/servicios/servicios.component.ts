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
   { img: "img/home/1.png", title: "Aplicaciones web personalizadas", descripcion: "Soluciones hechas a la medida de tu negocio." },
   { img: "img/home/2.png", title: "Aplicaciones móviles", descripcion: "Apps nativas y multiplataforma para llegar a más clientes." },
   { img: "img/home/3.png", title: "Migración a la nube", descripcion: "Lleva tus sistemas a AWS, Azure o Google Cloud." },
   { img: "img/home/4.png", title: "Administración cloud", descripcion: "Gestión y monitoreo de servidores en la nube." },
   { img: "img/home/5.png", title: "Auditoría de seguridad", descripcion: "Evaluación completa de vulnerabilidades." },
   { img: "img/home/6.png", title: "Redes empresariales", descripcion: "Diseño e instalación de LAN/WAN seguras." },
   { img: "img/home/7.png", title: "Servidores físicos y virtuales", descripcion: "Configuración y administración." },
   { img: "img/home/8.png", title: "Consultoría digital", descripcion: "Estrategias para modernizar tu negocio." },
   { img: "img/home/9.png", title: "Automatización de procesos", descripcion: "Robots que ahorran tiempo y costos." }
  ]
}
