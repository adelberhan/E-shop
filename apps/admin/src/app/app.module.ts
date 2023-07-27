///////////////Modules//////////////
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
///////////////Component//////////////
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashpordComponent } from './pages/dashpord/dashpord.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesService } from '../../../../libs/products/src/lib/services/categories.service';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersModule } from '../../../../libs/users/src/lib/users.module';
///////////////UX//////////////
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { OrderListComponent } from './pages/orders/order-list/order-list.component';
import { OrderDetailComponent } from './pages/orders/order-detail/order-detail.component';
import { AuthGuard, JwtInterceptor } from '@ng-shop/users';
import { AppRoutingModule } from './aap-routing-module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxStripeModule } from 'ngx-stripe';

const UX_MODULE = [
  CardModule,
  ConfirmDialogModule,
  InputTextModule,
  ToolbarModule,
  ButtonModule,
  ColorPickerModule,
  TableModule,
  ToastModule,
  DropdownModule,
  InputNumberModule,
  FieldsetModule,
  InputTextareaModule,
  InputSwitchModule,
  EditorModule,
  PaginatorModule,
  TagModule,
  InputMaskModule,

];


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashpordComponent,
    ShellComponent,
    SidebarComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    ProductListComponent,
    ProductFormComponent,
    UserListComponent,
    UserFormComponent,
    OrderListComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    ...UX_MODULE,
    UsersModule,
    NgxStripeModule.forRoot(
      'pk_test_51NDTB0HSGwOehr5IHt3LHOYF2wZ9Fb3VjKEXYAb9JaGQEXnJy04GVgpNpYNIrNVZ6Y1PtFH7gmyq5qlAF5mnHCRr005uIQ8yoy'
    ),
  ],
  providers: [
    CategoriesService,
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
