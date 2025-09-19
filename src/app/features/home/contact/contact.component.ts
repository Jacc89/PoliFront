import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  standalone  : true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: any;

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      empresa: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor llena todos los campos correctamente.',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: '¡Enviado!',
      text: `Gracias ${this.form.value.nombre}, pronto nos pondremos en contacto.`,
      confirmButtonColor: '#198754'
    });

    this.form.reset();
  }

}
