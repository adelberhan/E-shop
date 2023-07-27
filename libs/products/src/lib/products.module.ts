import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './component/product-search/product-search.component';
import { CategoriesBannerComponent } from './component/categories-banner/categories-banner.component';
import { OrdersModule } from '../../../orders/src/orders.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './component /product-item/product-item.component';
import { FeaturedProductsComponent } from './component /featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { UiModule } from '@ng-shop/ui';


const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'category/:categoryId',
    component: ProductListComponent,
  }, {
    path: 'products/:productId',
    component: ProductPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    OrdersModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CheckboxModule,
    FormsModule,
    RatingModule,
    InputNumberModule, UiModule,
  ],
  declarations: [
    ProductSearchComponent,
    CategoriesBannerComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductListComponent,
    ProductPageComponent,
  ],
  exports: [
    ProductSearchComponent,
    CategoriesBannerComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductListComponent,
    ProductPageComponent,
  ],
})
export class ProductsModule {}
