import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { CartDetailsComponent } from './shop/cart-details/cart-details.component';
import { CheckOutComponent } from './shop/check-out/check-out.component';
import { ShopModule } from './shop/shop.module';
import { ShopComponent } from './shop/shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([ 
    { path:'shop',component:ShopComponent },
    { path:'cart',component:CartDetailsComponent },
    { path:'checkout',component:CheckOutComponent },
    { path:'admin', loadChildren:()=>import("./admin/admin.module").then(module=>module.AdminModule)},
    //{path:'admin',component:AdminComponent},
    { path:'**',redirectTo:'shop'},
    
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

