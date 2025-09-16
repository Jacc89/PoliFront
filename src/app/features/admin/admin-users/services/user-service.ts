import { Injectable } from '@angular/core';
import { User } from '../../../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private users: User[] = [
    { username: 'admin', email: 'admin@demo.com', password: '1234', role: 'admin' },
    { username: 'user1', email: 'user1@demo.com', password: '1234', role: 'user' }
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  findUser(email: string, password: string): User | undefined {
    return this.users.find(u => u.email === email && u.password === password);
  }
}
