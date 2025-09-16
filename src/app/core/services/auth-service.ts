import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../../features/admin/admin-users/services/user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = signal<User | null>(null);

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  login(email: string, password: string): boolean {
    const users = this.userService.getUsers();  // 👈 ahora toma de UserService
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      this.currentUser.set(user);
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }
}
