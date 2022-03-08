import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';


@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductsListComponent,
    ProductsFormComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers:[AuthGuard]
})
export class AdminModule { }

