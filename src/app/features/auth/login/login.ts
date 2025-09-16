import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  form: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private router: Router,
              private auth: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
  const { email, password } = this.form.value;
  const success = this.auth.login(email, password);
  console.log('Login success?', success, 'Current user:', this.auth.currentUser());
  if (success) {
    const user = this.auth.currentUser();
    if (user) {
      this.router.navigate([user.role === 'admin' ? '/admin' : '/']);
    }
  } else {
    this.error = 'Usuario o contraseña incorrectos';
  }
}

    goHome() {
    this.router.navigate(['/']);
  }
}
