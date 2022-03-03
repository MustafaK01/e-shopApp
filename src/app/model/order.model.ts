import { Injectable } from "@angular/core";
import { Cart } from "./cart";

@Injectable()
export class Order{
   public id:any;
   public name:any
   public address:any;
   public city:any;
   public phone:any;
   public email:any;
   public isSent:boolean=false;
   public cart:Cart;
   constructor(cart:Cart){
       this.cart=cart;
   }
   clearOrder(){
       this.id=null;
       this.name=null;
       this.address=null;
       this.city=null;
       this.phone=null;
       this.email=null;
       this.isSent=false;
       this.cart.clearCart();
   }
}

