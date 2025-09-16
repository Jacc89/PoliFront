import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminServices } from '../admin-services/admin-services';
import { AdminUsers } from '../admin-users/admin-users';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss'
})
export class AdminLayout {
   sidebarOpen = true;
  username = signal('admin');  // ejemplo de usuario
  rolUsuario = signal('admin'); // ejemplo de rol

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  goHome() {
    this.router.navigate(['/']);
  }

  cerrarSesion() {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
   goTo(route: string) {
    this.router.navigate([`/admin/${route}`]);
  }
}
