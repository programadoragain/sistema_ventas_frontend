import { Routes } from '@angular/router';
import { MainComponent } from './dashboard/components/main/main.component';
import { AddProductComponent } from './product/add/add-product.component';

export const routes: Routes = [
      { path: 'main', title: 'Main Dashboard', component: MainComponent },
      { path: 'product/add', title: 'Add Product', component: AddProductComponent },
      { path: '**', redirectTo: 'main' },
];
