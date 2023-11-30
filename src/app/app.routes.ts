import { Routes } from '@angular/router';
import { MainComponent } from './dashboard/components/main/main.component';
import { AddProductComponent } from './product/add/add-product.component';
import { ListProductComponent } from './product/list/list-product.component';

export const routes: Routes = [
      { path: 'main', title: 'Main Dashboard', component: MainComponent },
      { path: 'product/add', title: 'Add Product', component: AddProductComponent },
      { path: 'product/list', title: 'List Product', component: ListProductComponent },
      { path: '**', redirectTo: 'main' },
];
