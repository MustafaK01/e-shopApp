import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
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
    { path:'**',redirectTo:'shop'}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
