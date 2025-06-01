import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'ng-shop-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products = productsService.getFeaturedProducts(4);
  }

  ngOnInit(): void {
  }

}
