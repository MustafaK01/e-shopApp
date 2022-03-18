import { Injectable } from "@angular/core";
import { CartItem } from "./cartItem.model";
import { Product } from "./product.model";

@Injectable()
export class Cart{
    public items:CartItem[]=[];
    public howManyItemsInCart:number=0;
    public totalPrice:number=0;


    addItem(product:Product, quantity:number=1){
        //Eğer items dizisinde aynı nesne bulunuyorsa>2
        let item=this.items.find(item=>item.product.id==product.id)
        if(item!=undefined){
            //2>Arttırır.
            item.quantity+=quantity;
        }else{
            //Eğer yoksa yenisini ekler
            this.items.push(new CartItem(product,quantity));
        }
        this.calculateTotal();
    }
    calculateTotal(){
        this.howManyItemsInCart=0;
        this.totalPrice=0;
        this.items.forEach(item=>{
            this.howManyItemsInCart+=item.quantity;
            this.totalPrice+=item.product.price?(item.quantity*item.product.price):0;
        })
    }
    removeItemFromCart(product:Product){
        let item = this.items.findIndex(item=>item.product.id==product.id)
        if(item!=undefined){
            this.items.splice(item,1);
        }
        this.calculateTotal();
    }
    clearCart(){
        this.items=[];
        this.howManyItemsInCart=0;
        this.totalPrice=0;
    }
    updateQuantity(product:Product,quantity:number){
        let item = this.items.find(item=>item.product.id==product.id)    
        if(item!=undefined){
            item.quantity=quantity
        }
        this.calculateTotal();
    }
}

