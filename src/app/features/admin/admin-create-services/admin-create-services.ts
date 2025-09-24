import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService} from '../admin-services/services/servicio-service';
import { Categoria, Servicio } from '../../../core/models/servicio';
import { CategoriaService } from '../admin-services/services/categoria.service';

@Component({
  selector: 'app-admin-create-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-create-services.html',
  styleUrls: ['./admin-create-services.scss']
})
export class AdminCreateServices implements OnInit {
  form: FormGroup;
  editing = false;
  serviceId?: number;
  imagenPreview: string | null = null;
  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private servicioService: ServicioService,
    private categoriaService: CategoriaService

  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(1)]],
      imagen: [null, [Validators.required]],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      promocion: [false],
      categoria: ['', Validators.required],
      Numservicio:[ null, [Validators.required, Validators.min(1)]],
    });
  }
   getcategorias(): void {
   this.categoriaService.getCategorias().subscribe(data => {
     this.categorias = data;
   });
 }

  ngOnInit() {
     // 🔹 Cargar categorías
    this.getcategorias();
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editing = true;
      this.serviceId = Number(idParam);
      const servicio = this.servicioService.getServicioById(this.serviceId);
      if (servicio) {
        this.form.patchValue(servicio);
        this.imagenPreview = servicio.imagen; // Mostrar imagen actual
      }
    }
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagenPreview = reader.result as string;
      this.form.get('imagen')?.setValue(this.imagenPreview);
    };

    reader.readAsDataURL(file);
  }

   onSubmit() {
    if (!this.form.valid) return;

    const data = this.form.value;

    if (this.editing && this.serviceId !== undefined) {
      // Actualizar servicio existente
      const servicio = this.servicioService.getServicioById(this.serviceId);
      if (servicio) {
        Object.assign(servicio, data); // actualiza todos los campos
      }
    } else {
      // Crear nuevo servicio
      const newServicio: Servicio = {
        id: Math.max(...this.servicioService.getServicios().map(s => s.id)) + 1,
        ...data
      };
      this.servicioService.addServicio(newServicio);
    }

    this.router.navigate(['/admin/listservices']);
  }

  goBack() {
    this.router.navigate(['/admin/listservices']);
  }
}
