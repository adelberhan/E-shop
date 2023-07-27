import { NgModule } from '@angular/core';
import { DashpordComponent } from './pages/dashpord/dashpord.component';
import { ShellComponent } from './shared/shell/shell.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AuthGuard } from '@ng-shop/users';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './pages/orders/order-list/order-list.component';
import { OrderDetailComponent } from './pages/orders/order-detail/order-detail.component';
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashpordComponent,
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent,
      },
      {
        path: 'categories/form/:id',
        component: CategoriesFormComponent,
      },
      {
        path: 'product',
        component: ProductListComponent,
      },
      {
        path: 'product/form',
        component: ProductFormComponent,
      },
      {
        path: 'product/form/:id',
        component: ProductFormComponent,
      },
      {
        path: 'user',
        component: UserListComponent,
      },
      {
        path: 'user/form',
        component: UserFormComponent,
      },
      {
        path: 'user/form/:id',
        component: UserFormComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
      {
        path: 'orders/:id',
        component: OrderDetailComponent,
      },
    ],
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledNonBlocking' }),
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
