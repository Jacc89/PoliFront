import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // 👈 Importa SweetAlert2


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  submitted = false;

  form;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa un correo válido.',
        confirmButtonColor: '#dc3545', // rojo bootstrap
      });
      return;
    }

    this.submitted = true;

    // 🔥 Simular llamada al backend
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: '¡Correo enviado!',
        text: `Se envió un enlace de recuperación a: ${this.form.value.email}`,
        confirmButtonColor: '#0dfd79ff', // verde personalizado
      });
    }, 1000);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
