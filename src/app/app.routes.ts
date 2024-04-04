import { Routes } from '@angular/router';
import { CustomDirectiveComponent } from './content/pages/custom-directive/custom-directive.component';

export const routes: Routes = [
{ path: 'custom-directive', component: CustomDirectiveComponent, pathMatch: 'full' },
];