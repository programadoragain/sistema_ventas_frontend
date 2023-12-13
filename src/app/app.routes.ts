import { Routes } from '@angular/router';
import { MainComponent } from './dashboard/components/main/main.component';
import { AddProductComponent } from './product/add/add-product.component';
import { ListProductComponent } from './product/list/list-product.component';
import { AddComponent } from './user/add/add.component';
import { ListComponent } from './user/list/list.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
      { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
      { path: 'main', title: 'Main Section', component: MainComponent },
      { path: 'product/add', title: 'Add Product', component: AddProductComponent },
      { path: 'product/list', title: 'List Product', component: ListProductComponent },
      { path: 'user/add', title: 'Add User', component: AddComponent },
      { path: 'user/list', title: 'List User', component: ListComponent },
      { path: 'login', title: 'Login User', component: LoginComponent },
      { path: '**', redirectTo: 'login' },
];
