import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  {path:'main',component:AdminComponent,canActivate:[AuthGuard],children:[
    {path:'products',component:ProductsListComponent},
    {path:'products/:mode/:id',component:ProductsFormComponent},
    {path:'products/:mode',component:ProductsFormComponent},
    {path:'categories/:mode/:id/',component:CategoriesListComponent},
    {path:'categories/:mode',component:CategoriesFormComponent},
    {path:'categories',component:CategoriesListComponent},
    {path:'orders',component:OrderListComponent},

  ]},
  {path:'**',redirectTo:'auth'},
  {path:'admin',redirectTo:'auth'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

