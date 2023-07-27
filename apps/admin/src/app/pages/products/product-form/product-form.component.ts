import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../../../../../../libs/products/src/lib/services/categories.service';
import { Category } from '../../../../../../../libs/products/src/lib/models/category';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { Subject, takeUntil, timer } from 'rxjs';
import { Product } from '@ng-shop/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../../../../libs/products/src/lib/services/products.service';

@Component({
  selector: 'admin-product-form',
  templateUrl: './product-form.component.html',
  styles: [],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  editmode = false;
  isSubmitted = false;
  form: FormGroup;
  category: Category[];
  imgDisplay: string | ArrayBuffer;
  currentProductId: string;
  endSubs$: Subject<any> = new Subject();

  product: Product;
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private location: Location,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }
  ngOnDestroy() {
    this.endSubs$.complete();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      img: ['', Validators.required],
      isFeatured: [false],
    });
  }

  get productForm() {
    return this.form.controls;
  }
  private _getCategories() {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((category) => {
        this.category = category;
      });
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const productFormDate = new FormData();

    Object.keys(this.productForm).map((key) => {
      productFormDate.append(key, this.productForm[key].value);
    });
    if (this.editmode) {
      this._updateProduct(productFormDate);
    } else {
      this._addProduct(productFormDate);
    }
  }

  private _addProduct(productFormDate: FormData) {
    this.productsService
      .createProduct(productFormDate)
      .pipe(takeUntil(this.endSubs$))
      .subscribe(
        (product: Product) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Product ${product.name} is created!`,
            
          })
          timer(2000)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Product is not created!',
          });
        }
      );
  }
  private _updateProduct(productFormData: FormData) {
    this.productsService
      .updateProduct(productFormData, this.currentProductId)
      .pipe(takeUntil(this.endSubs$))
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product is updated!',
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Product is not updated!',
          });
        }
      );
  }
  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editmode = true;
        this.currentProductId = params.id;
        this.productsService
          .getProduct(params.id)
          .pipe(takeUntil(this.endSubs$))
          .subscribe((product: Product) => {
            this.productForm.name.setValue(product.product.name);
            this.productForm.category.setValue(product.product.category);
            this.productForm.brand.setValue(product.product.brand);
            this.productForm.price.setValue(product.product.price);
            this.productForm.countInStock.setValue(
              product.product.countInStock
            );
            this.productForm.isFeatured.setValue(product.product.isFeatured);
            this.productForm.description.setValue(product.product.description);
            this.productForm.richDescription.setValue(
              product.product.richDescription
            );
            this.imgDisplay = product.product.img;
            this.productForm.img.setValidators([]);
            this.productForm.img.updateValueAndValidity();
          });
      }
    });
  }
  onImgUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ img: file });
      this.form.get('img').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imgDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  cancel() {
    this.location.back();
  }
}
