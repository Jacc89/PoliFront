import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../admin-services/services/servicio-service';

@Component({
  selector: 'app-admin-create-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-create-services.html',
  styleUrl: './admin-create-services.scss'
})
export class AdminCreateServices {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicioService: ServicioService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.servicioService.addServicio(this.form.value);
      this.router.navigate(['/admin/listservices']);
    }
  }

  goBack() {
    this.router.navigate(['/admin/listservices']);
  }
}
