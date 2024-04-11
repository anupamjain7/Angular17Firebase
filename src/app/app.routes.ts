import { Routes } from '@angular/router';
import { CustomDirectiveComponent } from './content/pages/custom-directive/custom-directive.component';
import { AngularFireModule } from '@angular/fire/compat'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: 'verify-email', component: VerifyEmailComponent, pathMatch: 'full'},
    { path: 'file-upload', component: FileuploadComponent, pathMatch: 'full'},
    { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
    { path: 'custom-directive', component: CustomDirectiveComponent, pathMatch: 'full' },
];