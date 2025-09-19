import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // 👈 Importa SweetAlert2


@Component({
  selector: 'app-ForgotPassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  submitted = false;

  form;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
    }, 5000);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
