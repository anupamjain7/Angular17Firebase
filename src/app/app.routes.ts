import { Routes } from '@angular/router';
import { CustomDirectiveComponent } from './content/pages/custom-directive/custom-directive.component';
import { AngularFireModule } from '@angular/fire/compat'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'custom-directive', component: CustomDirectiveComponent, pathMatch: 'full' },
];