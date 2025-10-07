import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
         email: ['', [Validators.required, Validators.email]],
         username: ['', Validators.required],
         password: ['', Validators.required]
       });
  }
   onSubmit() {
    if (this.form.valid) {
      console.log('Datos de registro:', this.form.value);
      // Aquí luego conectarías con un servicio de registro
      this.router.navigate(['/']);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
