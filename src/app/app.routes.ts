import { Routes } from '@angular/router';
import { Home } from './features/home/home/home';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { AdminLayout } from './features/admin/admin-layout/admin-layout';
import { AdminServices } from './features/admin/admin-services/admin-services';
import { AdminUsers } from './features/admin/admin-users/admin-users';
import { AdminCreateServices } from './features/admin/admin-create-services/admin-create-services';
import { ForgotPasswordComponent } from './features/auth/ForgotPassword/ForgotPassword.component';
import { AdminDetailService } from './features/admin/admin-detail-service/admin-detail-service';

export const routes: Routes = [
   { path: '', component: Home },
   { path: 'login', component: Login },
   { path: 'register', component: Register },
   { path: 'forgot-password', component: ForgotPasswordComponent },
   { path: 'admin', component: AdminLayout,
    children: [
      { path: 'listservices', component: AdminServices },
      { path: 'createservices', component: AdminCreateServices },
      { path: 'editservice/:id', component: AdminCreateServices },
      { path: 'detailservice/:id', component: AdminDetailService },
      { path: 'users', component: AdminUsers },
      { path: '', redirectTo: 'services', pathMatch: 'full' }
    ]
    },

   { path: '**', redirectTo: '' }
];
