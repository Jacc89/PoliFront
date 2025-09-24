import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from '../../../core/models/servicio';
import { ServicioService } from '../admin-services/services/servicio-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-detail-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-detail-service.html',
  styleUrl: './admin-detail-service.scss'
})
export class AdminDetailService {
   servicio?: Servicio;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicioService: ServicioService
  ) {}

 ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.servicio = this.servicioService.getServicioById(id);
}


  goBack() {
    this.router.navigate(['/admin/listservices']);
  }

  editar(servicio: Servicio | undefined) {
    if (!servicio) return;
     this.router.navigate(['/admin/editservice', servicio.id]);
  }

}
